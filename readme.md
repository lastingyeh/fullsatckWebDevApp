### create Git & Heroku Application

1. Git Init

        $ git init

        $ git add .

        $ git commit -m 'init'

        $ heroku login

        $ heroku create

2. Connect to heroku git

    2.1 Default add

        $ git remote add heroku https://xxx.xxx.xxx.git

    2.2 (Alternatively) As rename for heroku-project-name

        $ heroku git:remote -a heroku-project-name

3. Deploy code to heroku

        $ git push heroku master