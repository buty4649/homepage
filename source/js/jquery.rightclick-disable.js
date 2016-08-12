/*
 * 右クリック禁止
 */

$(function() {
	$('*').bind('contextmenu',function() {
		alert('右クリック禁止！！');
		return false;
	});
});
