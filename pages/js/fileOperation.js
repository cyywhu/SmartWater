import aMessage from "./aMessage.js";
import constant from "./constant.js";

function fileReader(fileName) {
	var configName = fileName + constant.configFileFormat;
	//获取APP应用私有DOC文件路径
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
		//获取文件
		plus.io.resolveLocalFileSystemURL(fs.root.toLocalURL() + configName, function(entry) {
			entry.file(function(file) {
				//进行读取文件内容操作
				var fileReader = new plus.io.FileReader();
				fileReader.readAsText(file, 'utf-8');
				fileReader.onloadend = function(evt) {
					var arr = JSON.parse(evt.target.result.replace(/\r\n/g, ""));
					var nub = 0;
					var configKeys = [];
					for (var i = 0; i < arr.length; i++) {
						for (let key in arr[i]) {
							configKeys.push(key);
							try {
								uni.setStorage({
									key: key,
									data: arr[i][key],
									success: function() {
										if (nub == arr.length - 1) {
											aMessage.lbtp("保存成功！", 'success', uni);
										}
										nub++;
									}
								});
							} catch (e) {
								console.log(e);
							}
						}
					}
					uni.setStorage({
						key: fileName,
						data: configKeys,
						success: function() {
							console.log('success');
						}
					});
					removeFile(fs,configName);
				}	
			});
		}, function(e) {
			console.log(e.message);
			alert("Request file system failed: " + e.message);
		});
	});
}

function fileWriter(fileName, arr, obj, uni) {
	var configName = fileName + constant.configFileFormat;
	//获取APP应用私有DOC文件路径
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
		//根据用户传入name生成文件
		fobject.root.getFile(configName, {
			create: true,
			exclusive: true
		}, function(fileEntry) {
			//往文件写入保存的配置
			fileEntry.file(function(file) {
				fileEntry.createWriter(function(writer) {
					writer.seek(file.size - 1)
					writer.write(JSON.stringify(arr));
					obj.fale = true;
				}, function(e) {
					console.log(e);
				});
			});
		}, function(error) {
			obj.fale = false;
			aMessage.lbtp('文件已存在！', 'error', uni)
		});
	});
}

function downloadFile(_this, fileName, obj) {
	var configName = fileName + constant.configFileFormat;
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
		//根据用户传入name生成文件
		fs.root.getFile(configName, {
			create: true,
			exclusive: true
		}, function(fileEntry) {
			fileEntry.remove(function(entry ){
				
				// 可通过fs进行文件操作 =
				let url = 'http://' + _this.ip + ':' + _this.port + '/download?fileName=' + configName;
				_this.$refs.lFile.download({
						path: fs.root.toLocalURL() + configName,
						url, //必填，附件网络地址
						type: 'save', //选填，非save为临时下载
						customName: configName,
						//...DownloadOptions直接写key:value 
						// 例如： 
						method: 'GET',
					})
					.then(path => {
						obj.fale = true;
						_this.localPath = path;
						// console.log(path);
					});
			})
		
		}, function(error) {
			console.log(2)
			obj.fale = false;
			aMessage.lbtp('文件已存在！', 'error', uni)
		})
	}, function(e) {
		alert("Request file system failed: " + e.message);
	});
}

function uploadFile(_this) {
	var configName = _this.pzmc + constant.configFileFormat;
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
		uni.uploadFile({
			url: 'http://' + _this.ip + ':' + _this.port + '/upload', //仅为示例，非真实的接口地址
			filePath: fs.root.toLocalURL() + configName,
			name: 'file',
			success: (uploadFileRes) => {
				if (uploadFileRes.data == '上传成功') {
					aMessage.lbtp("上传成功！", 'success', uni);
				}
				removeFile(fs,configName);
			}
		});
	}, function(e) {
		alert("Request file system failed: " + e.message);
	});
}

function removeFile(fs,configName){
	fs.root.getFile(configName, {
		create: true
	}, function(fileEntry) {
		fileEntry.remove(function(entry ){
			
		})
	}, function(res){
		
	})
}



export default {
	fileReader,
	fileWriter,
	uploadFile,
	downloadFile
}
