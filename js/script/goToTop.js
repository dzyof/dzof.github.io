/**
 * Created by Wizlight on 28.07.2015.
 */
/*��� ������ ����� � �������� �������*/
function rocketMove(element,w) {
    element.animate({
        top:-210,
        left:w
    }, 3000);

    setTimeout(function () {
        $('#exhaust').hide();
    }, 500);
}
/*���� �� ������� � ������ - ��������� ��, ���� ���� - ��������� �����*/
function goUp(){
        var hPosR=$(document).outerHeight()-500;
        var wPosR=$(document).outerWidth()/2-270;
        var hPosE=$(document).outerHeight()-320;
        var wPosE=$(document).outerWidth()/2-500;
        $('#rocket').offset({top:hPosR, left:wPosR});
        $('#exhaust').show();
        $('#exhaust').offset({top:hPosE, left:wPosE});

        $('#rocket').show();

        $('body,html').animate({scrollTop: 0}, 2500);
        rocketMove($('#rocket'),wPosR);
};
