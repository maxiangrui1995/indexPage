import Mock from "mockjs";
const Random = Mock.Random;
const app = {
	/* 初次加载 */
	indexAllData(opt) {
		let query = JSON.parse(opt.body);
		return {
			data: Mock.mock({
				"control_center|4": [// 中间控制中心数据
					{
						"id|+1": 1,
						"id2|1-7": 2,
						"message_type": 1,
						"crossing_name": "1",
						"fault_type": 1,
						"memo": "1",
						"fault_img_url": "1",
						"is_img": 1
					}
				],
				"organize_show|5": [//所有组织机构数据
					{
						"o_id": "",
						"name": ""
					}
				]
			}),
			message: "操作成功",
			status: "1"
		};
	}
};

//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
Mock.mock("/api/Ma_zong/indexAllData", /post|get/i, app.indexAllData);
