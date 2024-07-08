function checkAttend() {
	console.log("check attend start")
	var pattern_name = /^[가-힣]+$/
	var pattern_number = /^[0-9]+$/

	is_id = $.trim($("#id").val()).match(pattern_number) ? false : true
	// is_name = $.trim($("#name").val()).match(pattern_name) ? false : true
	// is_seat = $.trim($("#seat").val()).match(pattern_number) ? false : true

	// if (is_name) {
	// 	alert("이름을 정확히 입력해주세요")
	// 	return false
	// } else if (is_id) {
	// 	alert("학번을 정확히 입력해주세요")
	// 	return false
	// } else if (is_seat) {
	// 	alert("좌석을 제대로 입력해주세요")
	// 	return false
	// }

	if (is_id) {
		alert("학번을 정확히 입력해주세요")
		return false
	}

	console.log("check attend end")
	return true
}

function mvSearch() {
	window.location.href = window.location.href.split("skku")[0] + "skku/search"
}

function mvIndex() {
	window.location.href = window.location.href.split("skku")[0] + "skku"
}

function mvImgCheck() {
	window.location.href = window.location.href.split("skku")[0] + "skku/img"
}
