using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GlobalHealth : MonoBehaviour
{

    public static int PlayerHealth = 12;
    public int InternalHealth;
    //public GameObject HealthDisplay;

    void Update()
    { 
        InternalHealth = PlayerHealth;
       // HealthDisplay.GetComponent<Text>().text = "Health: " + PlayerHealth;
        /*if (PlayerHealth == 0)
        {
            SceneManager.LoadScene(1);
        }*/
    }
}
