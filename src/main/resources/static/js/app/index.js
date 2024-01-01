var main = { // 메인 객체 정의
    init : function (){ // main 객체의 init 메서드 정의
        var _this = this;
        $('#btn-save').on('click', function(){
            _this.save();
        }); //제이쿼리로 클릭 이벤트 정의
        $('#btn-update').on('click', function() {
            _this.update();
        });
        $('#btn-delete').on('click', function(){
            _this.delete();
        })
    },
    save : function () { // main 객체의 save 메서드 정의
        var data = {
            title : $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        }; // 본문에서 데이터 value 읽어오기
        $.ajax({ //ajax로 비동기 요청 보냄.
            type: 'POST',
            url: '/api/v1/posts',
            dataType : 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 등록되었습니다.');
            window.location.href ='/'; // 비동기 요청 완료 시 JS에서 리다이렉트
        }).fail(function (error){
            alert(JSON.stringify(error)); // 실패시 전달된 에러 객체를 파싱해서 출력
        });
    },
    update : function(){
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 수정되었습니다.');
            window.location.href = '/';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    },
    delete : function(){
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function(){
            alert('글이 삭제되었습니다.');
            window.location.href = '/';

        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }

};

main.init();