import { _decorator, Component, Node, ScrollView,Vec2,Vec3, Rect, UITransform, UIOpacity } from 'cc';
import { ScrollViewPlusItem } from './ScrollViewPlusItem';

const { ccclass, property } = _decorator;

/**
 * 用法：
 *
 *      1. 将本组件挂载在节点上即可，和正常ScrollView使用一致
 *
 * 原理：
 *
 *      1. 滚动时，判断子节点是否进入了/离开了可视区域
 *      2. 根据结果回调对应事件，在可以实现类似以下功能：
 *          * 控制可视区域Item显示（透明度改为 255 ），非可视区域Item隐藏（透明度改为 0 ）
 */
@ccclass('ScrollViewPlus')
export default class ScrollViewPlus extends ScrollView {
    @property({
        tooltip: "是否计算在可视区域中Item的相对位置（可能会相对耗性能）"
    })
    caculatePosition: boolean = false;

    onEnable() {
        super.onEnable();
        this.node.on("scrolling", this._onScrollingDrawCallOpt, this);
    }

    onDisable() {
        super.onDisable();
        this.node.off("scrolling", this._onScrollingDrawCallOpt, this);
    }

    private _onScrollingDrawCallOpt() {
        if (this.content!.children.length == 0) {
            return;
        }
        this.optDc();
    }

    public optDc() {
        ScrollViewPlus.optDc(this, this.caculatePosition);
    }

    /**
     * 优化 ScrollView Content 节点 DC，可以手动调用
     *
     * 具体为
     *
     * 1. 进入ScrollView可视区域是，回调对应 Content 子节点上挂载的 ScollViewPlusItem 组件的 onEnterScorllViewEvents 数组事件
     * 2. 退出ScrollView可视区域是，回调对应 Content 子节点上挂载的 ScollViewPlusItem 组件的 onExitScorllViewEvents 数组事件
     */
    public static optDc(scrollView: ScrollView, caculatePosition: boolean) {

        // 获取 ScrollView Node 的 UITransform 组件
        let uiTransform = scrollView.node.getComponent(UITransform);


        if (uiTransform) {
            // 获取 ScrollView Node 的父节点的 UITransform 组件
            let parentTransform = scrollView.node.parent!.getComponent(UITransform);

            if (parentTransform) {

        // 将 Vec3 的位置转换为 Vec2
    let scrollViewPosition = scrollView.node.position;
    let svLeftBottomPoint = parentTransform.convertToWorldSpaceAR(
      new Vec3(
        scrollViewPosition.x - uiTransform.anchorX * uiTransform.width,
        scrollViewPosition.y - uiTransform.anchorY * uiTransform.height,
        scrollViewPosition.z
      )
    );
        // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）
        let svBBoxRect: Rect = new Rect(
            svLeftBottomPoint.x,
            svLeftBottomPoint.y,
            uiTransform.width,
            uiTransform.height
          );

        // 遍历 ScrollView Content 内容节点的子节点
      scrollView.content!.children.forEach((childNode: Node) => {
        // 获取子节点的 UITransform 组件
        let childTransform = childNode.getComponent(UITransform);
  
        // 没有绑定指定组件的子节点不处理
    let itemComponent = childNode.getComponent(ScrollViewPlusItem);
    if (itemComponent == null) {
        return;
    }

    // 如果相交了，那么就显示，否则就隐藏
    if (childTransform.getBoundingBoxToWorld().intersects(svBBoxRect)) {
        if (!itemComponent.isShowing) {
            itemComponent.isShowing = true;
            itemComponent.publishOnEnterScrollView();
        }
    } else {
        if (itemComponent.isShowing) {
            itemComponent.isShowing = false;
            itemComponent.publishOnExitScrollView();
        }
    }
      });


    }
}
}
}
