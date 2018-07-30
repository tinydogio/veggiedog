"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var Router = /** @class */ (function () {
    function Router() {
        this.router = express.Router();
        this.register();
    }
    Router.prototype.register = function () {
        console.warn('Router has been created but register method has not been overwritten.');
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=router.core.js.map