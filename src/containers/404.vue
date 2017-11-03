<template>
<div class="bg not-allowed">
	<div class="cont">
		<div class="c1"><img src="/static/images/error.png" alt=""></div>
		<h2>{{error.code}}</h2>
		<div class="c3">{{error.message}}</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			error: {
				code: "",
				errorid: "13",
				message: "提醒您 - 您可能输入了错误的链接地址，或者您没有访问权限"
			}
		}
	},
}
</script>

<style lang="css" scoped>
a {
	text-decoration: none;
	outline: none;
}

a:hover {
	text-decoration: underline;
}

.cf:after {
	content: ".";
	display: block;
	height: 0;
	font-size: 0;
	clear: both;
	visibility: hidden;
}

.cf {
	zoom: 1;
	clear: both;
}

.bg {
	width: 100%;
	background: url("/static/images/01.jpg") no-repeat center top #DAD9D7;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	overflow: hidden;
}

.cont {
	margin: 0 auto;
	width: 500px;
	line-height: 20px;
}

.c1 {
	height: 360px;
	text-align: center;
	line-height: 360px;
}

.c1 img {
	display: inline-block !important;
	margin: 0 auto;
	margin-top: 162px;
}

.cont h2 {
	text-align: center;
	color: #555;
	font-size: 18px;
	font-weight: normal;
	height: 35px;
}


.check-out {
	width: 90px;
	background: #486dc7;
	border-bottom: 2px solid #2d4a90;
	color: #fff;
	border-radius: 3px;
	line-height: 30px;
	margin: 0 auto;
	cursor: pointer;
}


.c2 {
	height: 35px;
	text-align: center;
}

.c2 a {
	display: inline-block;
	margin: 0 4px;
	font-size: 14px;
	height: 23px;
	color: #626262;
	padding-top: 1px;
	text-decoration: none;
	text-align: left;
}

.c2 a:hover{
    color: #3b7ab1;
}

.c3 {
	height: 80px;
	text-align: center;
	color: #999;
	font-size: 12px;
}

#bf {
	position: absolute;
	top: 269px;
	left: 0;
	width: 100%;
}

.bf1 {
	margin: 0 auto;
	width: 99px;
	padding-left: 32px;
}

.bd {
	height: 600px;
	overflow: hidden;
}

#box {
	position: absolute;
	top: 165px;
	left: 0;
	width: 100%;
	text-align: center;
}

.bf1 {
	margin: 0 auto;
	width: 99px;
	padding-left: 32px;
}
</style>
