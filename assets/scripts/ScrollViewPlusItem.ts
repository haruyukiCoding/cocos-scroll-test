import { _decorator, Component, EventHandler, Label, Node } from 'cc';
const { ccclass, property } = _decorator;


/**
 * 用法：
 *
 *      1. 将本组件挂载在Item节点上
 * 		2. 在属性面板上指定事件数组回调，即可监听 Item 「进入」和「离开」ScrollView可视区域的事件
 *
 */


@ccclass('ScrollViewPlusItem')
export class ScrollViewPlusItem extends Component {
    

    @property({
        type: [EventHandler],
        tooltip: "进入ScrollView时回调"
    })
    onEnterScorllViewEvents: EventHandler[] = [];

    @property({
        type: [EventHandler],
        tooltip: "离开ScrollView时回调"
    })
    onExitScorllViewEvents: EventHandler[] = [];

    @property({
        type: [EventHandler],
        tooltip: "进入ScrollView之后，位置发生改变时回调"
    })
    onPositionChangeEvents: EventHandler[] = [];

    /**
     * 当前是否在展示中
     *
     * 1. 在进入和离开ScrollView期间，为true
     * 2. 在离开ScrollView期间，为false
     */
    isShowing: boolean = false;

    /**
     * Item 进入 ScrollView 的时候回调
     */
    publishOnEnterScrollView() {
        if (this.onEnterScorllViewEvents.length === 0) {
            return;
        }
        this.onEnterScorllViewEvents.forEach(event => {
            event.emit([]);
        });
    }

    /**
     * Item 离开 ScrollView 的时候回调
     */
    publishOnExitScrollView() {
        if (this.onExitScorllViewEvents.length === 0) {
            return;
        }
        this.onExitScorllViewEvents.forEach(event => {
            event.emit([]);
        });
    }


    /**
     * Item 进入 ScrollView 后，位置发生移动时回调，离开ScrollView后不会回调
     *
     * @param xOffsetPercent 相对于 ScrollView 可视区域中心点，X的偏移量百分比，取值范围：[0, 1]。其中，0：为在可视区域最左边，1：为可视区域最右边
     * @param yOffsetPercent 相对于 ScrollView 可视区域中心点，Y的偏移量百分比，取值范围：[0, 1]。其中，0：为在可视区域最下边，1：为可视区域最上边
     */
    publishOnPositionChange(xOffsetPercent: number, yOffsetPercent: number) {
        if (this.onPositionChangeEvents.length == 0) {
            return;
        }
        this.onPositionChangeEvents.forEach(event => {
            event.emit([xOffsetPercent, yOffsetPercent]);
        });
    }


}

