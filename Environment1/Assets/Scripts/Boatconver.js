import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "There are small boat,but i don't think i need this.";
	yield WaitForSeconds (5);
	PlayerText.GetComponent.<Text>().text = "I think the river is not so deep.i can corss the river by walking";
	yield WaitForSeconds (5);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}
