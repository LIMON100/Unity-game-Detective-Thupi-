import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "Villain: Who are you.how did you get here.?";
	yield WaitForSeconds (3);
	PlayerText.GetComponent.<Text>().text = "Villain: Someone Kill him right now";
	yield WaitForSeconds (3);
	PlayerText.GetComponent.<Text>().text = "Ditective: I came for save the child";
	yield WaitForSeconds (4);
	PlayerText.GetComponent.<Text>().text = "Ditective: Your Times'up.";
	yield WaitForSeconds (4);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}

