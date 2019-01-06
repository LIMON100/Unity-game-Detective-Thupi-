using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HealthMonitor : MonoBehaviour {

	public GameObject Health5;
	public GameObject Health4;
	public GameObject Health3;
	public GameObject Health2;
	public GameObject Health1;
	public GameObject Health0;
	public int currenthealth;

	void Update(){
		currenthealth = GlobalHealth.PlayerHealth;
		if (currenthealth == 10) {
			if (Health5.transform.localScale.y <= 0.0f) {
				Health5.SetActive (false);
			}
			else {
				Health5.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}

		if (currenthealth == 8) {
			if (Health4.transform.localScale.y <= 0.0f) {
				Health4.SetActive (false);
			}
			else {
				Health4.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}

		if (currenthealth == 6) {
			if (Health3.transform.localScale.y <= 0.0f) {
				Health3.SetActive (false);
			}
			else {
				Health3.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}

		if (currenthealth == 4) {
			if (Health2.transform.localScale.y <= 0.0f) {
				Health2.SetActive (false);
			}
			else {
				Health2.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}

		if (currenthealth == 2) {
			if (Health1.transform.localScale.y <= 0.0f) {
				Health1.SetActive (false);
			}
			else {
				Health1.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}

		if (currenthealth == 0) {
			if (Health0.transform.localScale.y <= 0.0f) {
				Health0.SetActive (false);
			}
			else {
				Health0.transform.localScale = new Vector3 (0.0f,0.05f,0.0f);
			}
		}
	}
}