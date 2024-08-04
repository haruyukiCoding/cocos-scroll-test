System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, v2, Size, resources, SpriteFrame, Prefab, instantiate, v3, Sprite, Label, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      v2 = _cc.v2;
      Size = _cc.Size;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a40e9vUz9EBbPdSIThMmiX", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'v2', 'Size', 'resources', 'SpriteFrame', 'Prefab', 'instantiate', 'v3', 'Sprite', 'Label', 'Vec2', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", main = (_dec = ccclass('main'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(ScrollView), _dec(_class = (_class2 = class main extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "viewContent", _descriptor, this);

          _initializerDefineProperty(this, "maskNode", _descriptor2, this);

          _initializerDefineProperty(this, "scroll", _descriptor3, this);

          this.itemPrefab = null;
          this.startPos = null;
          this.cachePool = [];
          this.dataList = [];
          this.maxNum = 8;
          this.itemHeight = 105;
          this.initY = 0;
          this.maxY = 0;
          this.minY = 0;
          this.needSize = 0;
          this.visibleHeight = 0;
          this.curOffset = 0;
          this.miniIdx = 0;
          this.showItemList = [];
          this.headList = [];
        }

        // 头像图列表
        async onLoad() {
          this.startPos = v2(this.viewContent.position.x, this.viewContent.position.y);
          this.visibleHeight = this.maskNode.getComponent(UITransform).contentSize.height;
          this.scroll.node.on("scrolling", this.onScrolling.bind(this), this); // 加载预制体和图片

          await new Promise((resolve, reject) => {
            resources.loadDir("imgge", SpriteFrame, (err, asset) => {
              if (!err) this.headList = asset;
              resolve(asset);
            });
          });
          await new Promise((resolve, reject) => {
            resources.load("prefab/item", Prefab, (err, asset) => {
              if (!err) this.itemPrefab = asset;
              resolve(asset);
            });
          }); // 可以请求服务器得到
          // 总共40个数据

          for (let i = 0; i < 40; i++) {
            this.dataList.push(i + 1);
          }

          this.loadList();
        } // 每次显示 都初始化一下，用于重新加载数据,滑动重置


        onEnable() {
          this.cachePool = [];
          this.dataList = [];
          this.viewContent.getComponent(UITransform).contentSize.set(0, 0);
          this.initY = -this.itemHeight / 2;
          this.curOffset = 0;
          this.miniIdx = 0;
          this.showItemList = [];
          if (this.startPos) this.viewContent.position = this.startPos; // 重置初始位置
        }

        start() {} // 加载列表


        loadList() {
          this.viewContent.destroyAllChildren(); // 只要是第一页就重新加载；

          this.InitObjs(); // 设置内容高度

          this.needSize = this.dataList.length * this.itemHeight;
          this.viewContent.getComponent(UITransform).setContentSize(new Size(this.viewContent.getComponent(UITransform).contentSize.width, this.needSize));
        } // 初始化几个


        InitObjs() {
          let curX = 0;
          let curY = 0;

          for (let i = 0; i < this.maxNum; i++) {
            if (!this.dataList[i]) break;
            let obj = instantiate(this.itemPrefab);
            obj.parent = this.viewContent;
            obj.active = true;
            curY = this.initY - this.itemHeight * i;
            obj.position = v3(curX, curY);
            this.onRefresh(obj, i + "", i);
            this.showItemList.push(obj);
          }
        } //计算边界，超过边界则刷新列表
        //offest是左上角原点滑动的偏移量


        countBorder(offest) {
          let height = this.visibleHeight; //可见高度

          this.minY = offest; //获得相对于左上角原点的最小y值

          this.maxY = offest + height; //获得相对于左上角原点的最大y值
        } //强行刷新


        refresh() {
          let offest = this.curOffset; //最大高度，超过该高度，不刷新

          let maxY = this.needSize;
          if (offest < 0 || offest + this.visibleHeight >= maxY) return;
          let idx = 0; //从0开始

          this.countBorder(offest);
          let lastMinIdx = this.miniIdx;
          let miniIdx = Math.floor(offest / this.itemHeight); // 当每次更新miniIdx 不同的时候，就是移除和新建的时候

          if (this.miniIdx != miniIdx) {
            let curY = this.initY - this.itemHeight * miniIdx; // 当前要开始的y,大于y的删除

            let curEndY = this.initY - this.itemHeight * (miniIdx + this.maxNum); // 当前要结束的y,小于y的删除

            let deleteNodeUuIdList = []; // 需要移除的uuid 

            let remainList = []; // 剩余的data index

            this.showItemList.forEach((item, index) => {
              if (item.position.y > curY || item.position.y <= curEndY) {
                // 大于当前展示的坐标或者小于当前展示的最小坐标，就可以移除
                deleteNodeUuIdList.push(item.uuid);
              } else {
                remainList.push(lastMinIdx + index); // 这里的顺序 iten列表对应上次实例化的data的index
              }
            });
            let len = this.showItemList.length;

            for (let index = len - 1; index >= 0; index--) // 逆序移除 防止移除多个问题
            {
              let item = this.showItemList[index];

              if (deleteNodeUuIdList.indexOf(item.uuid) >= 0) // 在删除列表里，就删除，加到缓存列表中
                {
                  this.cachePool.push(item);
                  this.showItemList.splice(index, 1);
                }
            }

            this.miniIdx = miniIdx; // 更新

            for (let i = 0; i < this.maxNum; i++) {
              idx = this.miniIdx + i;

              if (remainList.indexOf(idx) < 0) // 没有包含的 新实例化的数据，在剩余item中没有的就创建
                {
                  this.refreshItem(idx, i);
                }
            }
          }
        } //idx是UI该刷新的第几个元素


        refreshItem(idx, objIdx) {
          if (idx < 0 || idx >= this.dataList.length) return;
          let obj = this.cachePool.pop();

          if (obj == null) {
            console.error("obj is null！");
            return;
          }

          let curX = 0;
          let curY = 0;
          curY = this.initY - this.itemHeight * idx; // console.error("idx:" + idx + ",curX:" + curX + ",curY:" + curY);

          obj.position = v3(curX, curY);
          obj.active = true;
          this.onRefresh(obj, objIdx, idx);
          this.showItemList.push(obj); // 这里坐标按照显示从上到下  从大到小的排序 ，因为this.showItemList的都是后面push ,实例化下面数据，可以push，但是实例化上面数据，需要加到最前面，按照位置，
          // 否则删除的时候根据index  remainList是根据index+lastMinIdx保留的，也就是数据列表的index,实例化上面数据index push到最后，到时候remian中index和实际的数据index不对应

          this.showItemList.sort((a, b) => {
            return -a.position.y + b.position.y;
          });
        }
        /**
         * 刷新回调
         * @param obj 
         * @param idx 需求显示的索引
         * @param objIdx 实际的item索引
         */


        onRefresh(obj, idx, objIdx) {
          let head = obj.getChildByName("head").getComponent(Sprite);
          let num = obj.getChildByName("num").getComponent(Label);
          head.spriteFrame = this.headList[objIdx];
          num.string = this.dataList[objIdx];
        } // 滑动中


        onScrolling() {
          //获取滚动视图相对于左上角原点的当前滚动偏移
          let scrollOffset = this.scroll.getScrollOffset();
          this.curOffset = scrollOffset.y;
          this.refresh();
        } // update(dt) {
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "viewContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6156de01579d4da0aee775a16189d8765484b618.js.map