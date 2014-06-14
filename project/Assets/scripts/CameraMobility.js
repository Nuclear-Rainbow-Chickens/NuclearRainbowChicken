#pragma strict
private var bird:Transform;
var HorizontalSpeed:float;
var VerticalSpeed:float;
private var DistanceX:float;
private var DistanceY:float;
function Start () {
	bird = GameObject.Find("bird").transform;
}

function Update () {
	if(DistanceX > 12)
	{
		rigidbody2D.AddForce(Vector2(-1,0) * HorizontalSpeed * DistanceX);
	}
	if(DistanceX < 12)
	{
		rigidbody2D.AddForce(Vector2(1,0) * HorizontalSpeed * DistanceX * -1);
	}
	if(DistanceY > 8)
	{
		rigidbody2D.AddForce(Vector2(0,-1) * VerticalSpeed * DistanceY);
	}
	if(DistanceY < -8)
	{
		rigidbody2D.AddForce(Vector2(0,1) * VerticalSpeed * DistanceY * -1);
	}
	DistanceX = transform.position.x - bird.position.x;
	DistanceY = transform.position.y - bird.position.y;
}