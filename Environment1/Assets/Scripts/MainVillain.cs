using UnityEngine.UI;
using UnityEngine.SceneManagement;
using UnityEngine;
using System.Collections;

public class MainVillain : MonoBehaviour
{

	public GameObject ThePlayer;
	public float TargetDistance;
	public float AllowedRange = 10;
	public GameObject TheEnemy;
	public float EnemySpeed;
	public int AttackTrigger;
	public RaycastHit Shot;

	public int IsAttacking;
	public int PainSound;

	void Update()
	{
		transform.LookAt(ThePlayer.transform);
		if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), out Shot))
		{
			TargetDistance = Shot.distance;
			if (TargetDistance < AllowedRange)
			{
				EnemySpeed = 0.01f;
				if (AttackTrigger == 0)
				{
					TheEnemy.GetComponent<Animation>().Play("Breathing Idle");
					transform.position = Vector3.MoveTowards(transform.position, ThePlayer.transform.position, EnemySpeed);
				}
			}
		}
	}

	void OnTriggerEnter()
	{
		AttackTrigger = 1;
	}

	void OnTriggerExit()
	{
		AttackTrigger = 0;
	}


	IEnumerator EnemyDamage()
	{
		IsAttacking = 1;
		PainSound = Random.Range(1, 4);
		yield return new WaitForSeconds(0.9f);

		GlobalHealth.PlayerHealth -= 2;
		/*if (PainSound == 1)
		{
			Hurt01.Play();
		}
		if (PainSound == 2)
		{
			Hurt02.Play();
		}
		if (PainSound == 3)
		{
			Hurt03.Play();
		}*/
		yield return new WaitForSeconds(0.05f);
		yield return new WaitForSeconds(1);
		IsAttacking = 0;

	}
}