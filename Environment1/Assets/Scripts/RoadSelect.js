import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "Detective: I will take left road.";
	yield WaitForSeconds (1.5);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}
