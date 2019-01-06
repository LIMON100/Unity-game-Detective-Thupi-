import UnityEngine.UI;

var PlayerText : GameObject;
var TextDisplay : GameObject;

var Line001:AudioSource;
var Line002:AudioSource;

function Start(){
		transform.position = Vector3(0, -1000, 0);
		yield WaitForSeconds(2);
		Line001.Play();
		TextDisplay.SetActive(true);
		PlayerText.GetComponent.<Text>().text="Where is he?";;
		yield WaitForSeconds(1);
		Line002.Play();
		PlayerText.GetComponent.<Text>().text="i have to find the man.";
		yield WaitForSeconds(1);
		PlayerText.GetComponent.<Text>().text="";
		TextDisplay.SetActive(false);
		this.gameObject.SetActive(false);
}

/*import UnityEngine.UI;

var TextBoxOnCheck:int = 0;
var MessageBox : GameObject;
var TextBox : GameObject;
var PlayerText : GameObject;
var TextDisplay : GameObject;

function OnMouseDown()
{
	if(TextBoxOncheck==0)
	{
		TextBoxOnCheck=1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text="My son is Lost";

	}

	else
	{
		TextBoxOnCheck=0;
		MessageBox.SetActive(false);
		TextBox.GetComponent.<Text>().text="Can u find my son";
	}
}*/