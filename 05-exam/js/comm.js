// html 페이지를 로드한 후 실행
// $(document).ready(function() {})
$(function () {
    // modal
    // 모달창 열기
    // .list-bbs li:first-child 클릭했을 때
    $('.list-bbs li:first-child').on('click', function () {
        // modal 열기
        // #modal 보이게
        $('#modal').show();
    });
    // #modal .btn-close 클릭했을 때
    $('#modal .btn-close').on('click', function () {
        // modal 닫기
        // #modal 감추기
        $('#modal').hide();
    });

    // tab
});
