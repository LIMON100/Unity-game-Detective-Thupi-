import UnityEngine.UI;

var TheTextBox : GameObject;
var PlayerText : GameObject;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	TheTextBox.SetActive(true);
	PlayerText.SetActive(true);
	PlayerText.GetComponent.<Text>().text = "Stranger: Hello Detective.How are U?";
	yield WaitForSeconds (2.5);
	PlayerText.GetComponent.<Text>().text = "Detective: Hi.I am fine.How r u?";
	yield WaitForSeconds (2.5);
	PlayerText.GetComponent.<Text>().text = "Stranger: I am not so good.My son was kidnapped yesterday.Kidnapper Told me to give money.";
	yield WaitForSeconds (12);
	PlayerText.GetComponent.<Text>().text = "Stranger: They also give me a location.";
	yield WaitForSeconds (3);
	PlayerText.GetComponent.<Text>().text = "Detective: Oh!!";
	yield WaitForSeconds (1);
	PlayerText.GetComponent.<Text>().text = "Stranger: I want u take the case and save my son." ;
	yield WaitForSeconds (5);
	PlayerText.GetComponent.<Text>().text = "Detective: Ok.I take the case.Give me the location?" ;
	yield WaitForSeconds (6);
	PlayerText.GetComponent.<Text>().text = "Stranger: Here the location." ;
	yield WaitForSeconds (4);
	PlayerText.GetComponent.<Text>().text = "";
	TheTextBox.SetActive(false);
	this.gameObject.SetActive(false);
}
