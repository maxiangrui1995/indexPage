import Mock from "mockjs";
const Random = Mock.Random;

// 节点数
const node_number = () => {
	return Mock.mock({
		"sum": "@integer(0, 99999)",
		"online": "@integer(0, 99999)"
	})
}
Mock.mock("/api/Ma_zong/nodeNumber", /post|get/i, { data: node_number, status: "1" });

// 在线离线率
const online_radio = () => {
	let p = Random.float(0, 100, 0, 2);
	return Mock.mock({
		on_radio: p,
		off_radio: parseFloat((100 - p).toFixed(2))
	})
}
Mock.mock("/api/Ma_zong/onlineRadio", /post|get/i, { data: online_radio, status: "1" });

// 资产统计
const count_assets = () => {
	return Mock.mock({
		"data": [{
			category_num: "1",
			"count": "@integer(0, 99999)",
			name: "视频设备"
		}, {
			category_num: "2",
			"count": "@integer(0, 99999)",
			name: "服务器"
		}, {
			category_num: "3",
			"count": "@integer(0, 99999)",
			name: "动环设备"
		}, {
			category_num: "4",
			"count": "@integer(0, 99999)",
			name: "机箱设备"
		}, {
			category_num: "5",
			"count": "@integer(0, 99999)",
			name: "网络设备"
		}]
	}).data
}
Mock.mock("/api/Ma_zong/countAssets", /post|get/i, { data: count_assets, status: "1" });

// 中心控制消息
const control_center = () => {
	/* if (Random.boolean(1, 2, true)) {
		return Mock.mock({
			"data": [{
				"id|+1": 0,
				"message_type": '@integer(0,3)',
				"fault_type|1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 52, 54, 100, 102, 104, 106, 108, 110, 112, 114],
				"memo": "@csentence(5, 10)",
				"level": "@integer(0, 5)",
				"crossing_name": "@csentence(5, 10)",
				"create_time": "@datetime"
			}]
		}).data;
	} else {
		return [];
	} */
	return Mock.mock({
		"data": [{
			"id|+1": 0,
			"message_type":"1",
			"fault_type|1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 52, 54, 100, 102, 104, 106, 108, 110, 112, 114],
			"memo": "@csentence(5, 10)",
			"level": "@integer(0, 5)",
			"crossing_name": "@csentence(5, 10)",
			"create_time": "@datetime"
		}]
	}).data;
}
Mock.mock("/api/Ma_zong/controlCenter", /post|get/i, { data: control_center, status: "1" });

// 组织机构
const organize_show = () => {
	return Mock.mock({
		"data|4": [{
			"o_id|+1": 100,
			"name": "@name"
		}]
	})
}

/* 在线率 */

/* 节点数 */

/* 资产统计 */
/* 组织机构 */
/* const organize_show1 = () => {
	return Mock.mock([{
		"o_id": "6e7a863a-5ffc-11e8-b047-7085c2388a55",
		"name": "组织机构"
	},
	{
		"o_id": "8f655d48-5e60-11e8-b047-7085c2388a55",
		"name": "镇江市交警大队"
	},
	{
		"o_id": "0dc12b4d-cdc0-2b81-bcf8-7bcd93c754de",
		"name": "京口区交警一中队"
	},
	{
		"o_id": "83dccb2f-8e25-1a09-b2cb-34db4ea9a2f0",
		"name": "测试"
	},
	{
		"o_id": "d6b48efc-f3d4-6512-bee8-055e4b4c6bd9",
		"name": "测试一中队"
	}])
} */
/* 第一个组织机构下的机箱数据 */
/* const crossing_box1 = () => {
	return Mock.mock({
		"dev_code": "6e7a863a-5ffc-11e8-b047-7085c2388a55",
		"name": Random.cname()
	})
} */
/* const crossing_box_random = () => {
	return Mock.mock({
		"crossing_box|6": [crossing_box()]
	}).crossing_box
} */
/* 自动修复 */
/* const fault_repair1 = () => {
	return Mock.mock({
		"auto_radio": 100,		//自动修复率
		"automatic": Random.integer(0, 99999),  // 自动修复数
		"artificial": Random.integer(0, 99999)			//人工修复数
	})
} */
/* 故障原因 */
/* const current_fault1 = () => {
	return Mock.mock({
		"id|1": 100,									//无所谓
		"dev_code": "2000",							//为所谓
		"type": 1,									//故障设备类型 0机箱，1相机
		"crossing_name": Random.csentence(5, 10),							//路口名称
		"fault_type": 50,								//无所谓
		"memo": Random.csentence(5, 10),							//故障描述
		"create_time": "2018-06-11 09:49:08",				//发生时间
		"is_dispatch": 0,								//派发状态0未派发1 已手动派发2已自动派发
		"screen_type": 0,								//无所谓
		"screen_reason": null,							//无所谓
		"level": Random.integer(0, 5),									///安全等级
		"o_id": "6e7a863a-5ffc-11e8-b047-7085c2388a55",	//无所谓
		"alert_level": 5,								//告警等级
		"fault_img_url": "",								//当前故障图片地址
		"is_auto_repair": 1,							//是否处于尝试自动修复0是1否
		"dev_name": "测试相机_1（别动）",				//设备名称
	})
} */
/* 中心控制数据 */
/* const control_center1 = () => {
	return Mock.mock({
		"id|+1": 0,
		"message_type": '@integer(0,3)',
		"fault_type|1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 52, 54, 100, 102, 104, 106, 108, 110, 112, 114],
		"memo": Random.csentence(5, 10),
		"level": Random.integer(0, 5),
		// 路口名称
		"crossing_name": Random.csentence(5, 10),
		"create_time": "@time"
	})
} */
/* const control_center_random1 = () => {
	if (Random.boolean(1, 2, true)) {
		return [control_center()]
	} else {
		return [];
	}
} */
/* 视频 */
/* const play_video1 = () => {
	return Mock.mock({
		"id": 0,
		"dev_code": "345678",
		"category_num": "1",
		"dev_name": "测试相机", //设备名称
		"brand": Random.cname(), //品牌
		"model": Random.integer(10, 300), //型号
		"ip": "192.168.2.3", //ip
		"o_id": "8f655d48-5e60-11e8-b047-7085c2388a55",
		"description": "",
		"create_time": "2018-06-06 09:49:47",
		"update_time": null,
		"type": 1,
		"monitor_loc_name": "",
		"ipv6": "",
		"mac": "",
		"camera_function": "",
		"fill_light_type": "1",
		"media_encode": 1,
		"addres_detail": "",
		"direction": 1,
		"image_url": null,
		"install_date": null,
		"save_days": 30,
		"sdk": Random.cname(), //设备厂商
		"port": 554,
		"user_name": "123",
		"pwd": "123",
		"channel": 1,
		"memo": null,
		"send_date": null,
		"valid_time": Random.integer(1, 3), //生命周期
		"build_company": Random.cname(), //承建单位
		"box_name": "测试机箱",
		"check_server_name": null,
		"address": ""		//视频地址
	})
}

/* 初次加载 */
const indexAllData1 = Mock.mock({
	// 在线率
	"online_radio": "online_radio",
	// 节点数
	"node_number": "node_number",
	// 资产统计
	"count_assets": "count_assets",
	// 组织机构
	"organize_show": "organize_show",
	// 第一个组织机构下的机箱数据
	"crossing_box|5": ["crossing_box"],
	// 视频
	"play_video": [
		"play_video"
	],
	//自动修复
	"fault_repair": "fault_repair",
	//故障原因
	"current_fault|4": ["current_fault"],
	//中心控制数据
	"control_center|3": ["control_center"]
})

//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
// Mock.mock("/api/Ma_zong/indexAllData", /post|get/i, { data: indexAllData, status: "1" });

// Mock.mock("/api/Ma_zong/nodeNumber", /post|get/i, { data: node_number, status: "1" });
// Mock.mock("/api/Ma_zong/onlineRadio", /post|get/i, { data: online_radio, status: "1" });
// Mock.mock("/api/Ma_zong/controlCenter", /post|get/i, { data: control_center_random, status: "1" });
// Mock.mock("/api/Ma_zong/playVideo", /post|get/i, { data: play_video, status: "1" });