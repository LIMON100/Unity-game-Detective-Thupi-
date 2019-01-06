import UnityEngine.UI;

var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var PanelDisplay: GameObject;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;
	if (Input.GetButtonDown("Action")) {
		if (TheDistance <=2 ) {
			TakeNineMil();
		}
	}
}

function OnMouseOver () {
	if (TheDistance <=2 ) {
		TextDisplay.GetComponent.<Text>().text = "Press E to the Gun";
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function TakeNineMil () {
	transform.position = Vector3(0, -1000, 0);
	FakeGun.SetActive(false);
	RealGun.SetActive(true);
	PanelDisplay.SetActive(true);
}