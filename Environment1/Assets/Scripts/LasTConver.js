import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "Untie The boy and save him.";
	yield WaitForSeconds (3);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}
