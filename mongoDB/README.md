## How to run?
ทำตามวิธีการข้างล่างนี้

```bash
$ docker-compose build
$ docker-compose up -d
$ curl -L http://localhost/?username=manaa
```
ผลลัพธ์
```json
{
"username": "manaa",
"phone_number": "1234567890",
"profile_image": "https://picsum.photos/1000"
}
```

## How to kill?
ทำตามวิธีการข้างล่างนี้

```bash
$ docker-compose down
$ docker system prune --volumes -f
```