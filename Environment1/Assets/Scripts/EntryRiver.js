import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "I have to Cross the river.";
	yield WaitForSeconds (1);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}