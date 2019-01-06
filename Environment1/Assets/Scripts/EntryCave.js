import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "There is a cave.";
	yield WaitForSeconds (3);
	PlayerText.GetComponent.<Text>().text = "I think there is a way oposite of the cave";
	yield WaitForSeconds (6);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}
