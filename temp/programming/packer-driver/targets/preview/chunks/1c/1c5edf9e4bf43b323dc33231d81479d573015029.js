System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, item3;

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
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e512k6IRpI3LudDaVN9nSi", "item3", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandler', 'Label', 'Node', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("item3", item3 = (_dec = ccclass('item3'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class item3 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "descLabel", _descriptor2, this);
        }

        setValue(name, desc) {
          this.nameLabel.string = name;
          this.descLabel.string = desc;
        } // /**
        //  * 本Item进入ScrollView的时候回调
        //  */
        // onEnterSrcollView() {
        // 	this.node.opacity = 255;
        // 	this._loadAndShowPic();
        // }
        // /**
        //  * 本Item离开ScrollView的时候回调
        //  */
        // onExitScrollView() {
        // 	this.node.opacity = 0;
        // }
        // /**
        //  * 加载并展示图片
        //  */
        // private async _loadAndShowPic() {
        // 	this._showPlaceHolder();
        // 	// 模拟延迟一段时间后再加载成功
        // 	await new Promise((resolve, reject) => {
        // 		setTimeout(() => {
        // 			resolve();
        // 			// }, Math.random() * 1000);
        // 		}, 160);
        // 	});
        // 	this.picSprite.spriteFrame = await ResourcesLoader.loadSpriteFrameFromResources(this._data.picPath);
        // 	this.descLabel.string = `${this._data.index}: ${this._data.picPath}`;
        // 	this._hidePlaceHolder();
        // }
        // private _showPlaceHolder() {
        // 	this.placeHolderContentNode.active = true;
        // 	this.placeHolderContentNode.stopAllActions();
        // 	this.placeHolderContentNode.opacity = 255;
        // 	this.placeHolderLoadingNode.stopAllActions();
        // 	this.placeHolderLoadingNode.runAction(cc.repeatForever(cc.rotateBy(1, 360)));
        // }
        // private _hidePlaceHolder() {
        // 	this.placeHolderContentNode.stopAllActions();
        // 	this.placeHolderContentNode.runAction(
        // 		cc.sequence(
        // 			cc.fadeOut(0.24),
        // 			cc.callFunc(() => {
        // 				this.placeHolderContentNode.active = false;
        // 				this.placeHolderLoadingNode.stopAllActions();
        // 			}, this)
        // 		)
        // 	);
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c5edf9e4bf43b323dc33231d81479d573015029.js.map