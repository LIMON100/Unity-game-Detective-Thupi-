import UnityEngine.UI;

var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeKnife : GameObject;
var RealKnife : GameObject;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;
	if (Input.GetButtonDown("Action")) {
		if (TheDistance >=0 ) {
			TakeNineMil();
		}
	}
}

function OnMouseOver () {
	if (TheDistance >=0 ) {
		TextDisplay.GetComponent.<Text>().text = "Press E to Take the Knife";
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function TakeNineMil () {
	transform.position = Vector3(0, -1000, 0);
	FakeKnife.SetActive(false);
	RealKnife.SetActive(true);
}