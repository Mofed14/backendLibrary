"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const booksRouter_1 = __importDefault(require("./routing/booksRouter"));
const categoryRouter_1 = __importDefault(require("./routing/categoryRouter"));
const userRouter_1 = __importDefault(require("./routing/userRouter"));
const app = express_1.default();
const port = 4000;
mongoose_1.default.connect("mongodb://localhost/libr");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/books", booksRouter_1.default);
app.use("/categories", categoryRouter_1.default);
app.use("/users", userRouter_1.default);
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield app.listen(port);
            console.log(`server is listening on ${port}`);
        }
        catch (error) {
            throw error;
        }
    });
}
server();
//# sourceMappingURL=app.js.map