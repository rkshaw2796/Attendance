Initialised the empty local git respository in folder Login_Page --command git init

Configure the global variable:
git config --global user.name "Rahul Shaw"
git config --global user.email "rkshaw2796@gmail.com"

Run the below command to connect GitHub:
echo "# Attendance" >> README.md
git add .                               --reason: Moving all files and folders from working directory to staging stage
git commit -m "first commit"            --reason: commit all the staging files to commit stage.
git branch -M main                      --reason: cretae main branch
git remote add origin https://github.com/rkshaw2796/Attendance.git     --reason: created remote origin and added the remote github url
git push -u origin main                 --reason: pushing the local repository to remote repository