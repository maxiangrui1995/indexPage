import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 中心消息-故障
        msgFailure: {},
        // 中心消息-故障
        msgRequire: {},
        // 视频通道下当前选中的组织机构
        organize_show_selected: {},
        // 视频通道下当前选中的组织机构下的信息
        crossing_box_selected: []
    },
    mutations: {
        setMsgFailure(state, data) {
            state.msgFailure = data;
        },
        setMsgRequire(state, data) {
            state.msgRequire = data;
        },
        setOriganizeShow(state, data) {
            state.organize_show_selected = data;
        },
        setCrossingBox(state, data) {
            state.crossing_box_selected = data;
        }
    },
    actions: {

    }
});
