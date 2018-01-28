
cc.Class({
    extends: cc.Component,

    properties: {
        chapterPrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:
    init(chaptersNum) {
        cc.log("chaptersNum", chaptersNum);
        this.chaptersNum = chaptersNum;
        var layoutNode = this.node.getChildByName("layout");
        // 清理子节点
        layoutNode.removeAllChildren();
        // 创建子节点
        for (let i = 0; i < this.chaptersNum; i++) {
            let chapterNode = cc.instantiate(this.chapterPrefab);
            chapterNode.parent = layoutNode;

        }
        layoutNode.getComponent("Layout").updateLayout();
    },
    onLoad () {
        this.level_model = this.node.getComponent("level_model");
        this.init(this.level_model.chapterNum);
    },
    // update (dt) {},
});
