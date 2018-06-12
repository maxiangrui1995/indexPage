import Mock from "mockjs";
const Random = Mock.Random;
const app = {
	/* 初次加载 */
	indexAllData(opt) {
		let data = Mock.mock({
			// 在线率
			"online_radio": {
				on_radio: 66.77,
				off_radio: 33.33
			},
			// 节点数
			"node_number": {
				sum: 80,
				online: 33
			},
			// 资产统计
			"count_assets": [
				{
					category_num: "1",
					count: 8,
					name: "视频设备"
				}, {
					category_num: "2",
					count: 18,
					name: "服务器"
				}, {
					category_num: "3",
					count: 2,
					name: "动环设备"
				}, {
					category_num: "4",
					count: 10,
					name: "机箱设备"
				}, {
					category_num: "5",
					count: 3,
					name: "网络设备"
				}
			],
			// //组织机构
			"organize_show": [
				{
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
				}
			],
			// 视频
			"play_video": [
				{
					"id": 113,
					"dev_code": "345678",
					"category_num": "1",
					"dev_name": "测试相机", //设备名称
					"brand": "N", //品牌
					"model": "60", //型号
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
					"sdk": "海康", //设备厂商
					"port": 554,
					"user_name": "123",
					"pwd": "123",
					"channel": 1,
					"memo": null,
					"send_date": null,
					"valid_time": "3", //生命周期
					"build_company": "中微", //承建单位
					"box_name": "测试机箱",
					"check_server_name": null,
					"address": ""		//视频地址
				}
			],
			//自动修复
			"fault_repair": {
				"auto_radio": 33.33,  // 自动修复率
				"automatic": 1,		//自动修复数
				"artificial": 2			//人工修复数
			},
			//故障原因
			"current_fault": [
				{
					"id": 629,									//无所谓
					"dev_code": "2000",							//为所谓
					"type": 1,									//故障设备类型 0机箱，1相机
					"crossing_name": null,							//路口名称
					"fault_type": 50,								//无所谓
					"memo": "设备故障",							//故障描述
					"create_time": "2018-06-11 09:49:08",				//发生时间
					"is_dispatch": 0,								//派发状态0未派发1 已手动派发2已自动派发
					"screen_type": 0,								//无所谓
					"screen_reason": null,							//无所谓
					"level": 0,									///安全等级
					"o_id": "6e7a863a-5ffc-11e8-b047-7085c2388a55",	//无所谓
					"alert_level": 5,								//告警等级
					"fault_img_url": "",								//当前故障图片地址
					"is_auto_repair": 1,							//是否处于尝试自动修复0是1否
					"dev_name": "测试相机_1（别动）",				//设备名称
				}
			],
			//中心控制数据
			"control_center|3": [{
				"id|+1": 0,
				//消息类型
				"message_type|1": [0, 1, 2, 3],
				//故障类型
				"fault_type|1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 52, 54, 100, 102, 104, 106, 108, 110, 112, 114],
				//故障描述
				"memo|+1": [Random.cparagraph(2), Random.cparagraph(2), Random.cparagraph(2)],
				// 路口名称
				"crossing_name|+1": [Random.cname(), Random.cname(), Random.cname()]
			}]
		});

		return {
			data: data,
			message: "操作成功",
			status: "1"
		};
	}
};

//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
Mock.mock("/api/Ma_zong/indexAllData", /post|get/i, app.indexAllData);
