#pragma strict
var time:float;
private var player:GameObject;
function Start()
{
	player = GameObject.Find("bird");
	Physics2D.IgnoreCollision(player.collider2D, collider2D);
}

function OnEnable () {
	Invoke("destroy",time);
}

function destroy()
{
	gameObject.SetActive(false);
}
