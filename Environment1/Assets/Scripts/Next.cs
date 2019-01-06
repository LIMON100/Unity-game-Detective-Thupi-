using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Next : MonoBehaviour {

	[SerializeField] private string loadlevel;

    void OnTriggerEnter(Collider other)
	{
		if (other.CompareTag ("Untagged")) {
			SceneManager.LoadScene (loadlevel);
		}	
	}
}
