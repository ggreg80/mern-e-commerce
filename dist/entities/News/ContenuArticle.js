"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = require("../Messagerie/Attachment");
class ContenuArticle {
    constructor(contenuArticle) {
        this.pjs = [];
        this.errmsg = contenuArticle.errmsg;
        this.titre = contenuArticle.titre;
        this.codeHTML = contenuArticle.codeHTML;
        this.date = new Date(contenuArticle.date);
        this.url = contenuArticle.url;
        this.auteur = contenuArticle.auteur;
        this.type = contenuArticle.type;
        contenuArticle.pjs.forEach(pj => this.pjs.push(new Attachment_1.default(pj)));
    }
}
exports.default = ContenuArticle;
