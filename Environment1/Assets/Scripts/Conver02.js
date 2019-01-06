import UnityEngine.UI;

var TextBoxOnCheck:int = 0;
var MessageBox : GameObject;
var TextBox : GameObject;

function OnMouseDown()
{
	if(TextBoxOnCheck==0)
	{
		TextBoxOnCheck=1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text="My son is Lost";
		yield WaitForSeconds(2);
		TextBox.GetComponent.<Text>().text="Can ";
		yield WaitForSeconds(1);
		TextBox.GetComponent.<Text>().text="find my";
		yield WaitForSeconds(1);
		TextBox.GetComponent.<Text>().text="my son";
		yield WaitForSeconds(1);
		TextBox.GetComponent.<Text>().text="son";

	}

	else
	{
		TextBoxOnCheck=0;
		MessageBox.SetActive(false);
		///TextBox.GetComponent.<Text>().text="Can u find my son";
	}
}