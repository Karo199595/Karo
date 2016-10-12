/**
 * Created by Администратор on 30.09.2016.
 */
function rightPassword() {
    var fisrt = document.getElementById('registerPassword').value;
    var second = document.getElementById('again').value;
    var n = fisrt.localeCompare(second);
if(n==0)
{
    document.getElementById('correctPassword').innerHTML="Passwords are matched ";

}else
{
    document.getElementById('correctPassword').innerHTML="Passwords don`t matched ";}

}



function selectColor(a) {


}