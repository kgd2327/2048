(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/color.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '677e43CnFlPwKn/lB6u8M2b', 'color', __filename);
// script/color.js

"use strict";

var colors = [];

colors[0] = cc.color(192, 184, 172, 225);
colors[2] = cc.color(235, 224, 213, 225);
colors[4] = cc.color(234, 219, 193, 225);
colors[8] = cc.color(240, 167, 110, 225);
colors[16] = cc.color(244, 138, 89, 225);
colors[32] = cc.color(245, 112, 85, 225);
colors[64] = cc.color(245, 83, 52, 225);
colors[128] = cc.color(234, 200, 103, 225);
colors[256] = cc.color(234, 197, 87, 225);
colors[512] = cc.color(234, 192, 71, 225);
colors[1024] = cc.color(146, 208, 80, 225);
colors[2048] = cc.color(0, 176, 240, 225);

module.exports = colors;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=color.js.map
        