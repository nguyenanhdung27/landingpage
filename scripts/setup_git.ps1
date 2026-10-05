$git = "C:\Users\DUNG\.gemini\antigravity\scratch\mingit\cmd\git.exe"

& $git init
& $git config user.name "nguyenanhdung27"
& $git config user.email "nguyenanhdung27@users.noreply.github.com"
& $git branch -M main
& $git add -A
& $git status
& $git commit -m "feat: initial commit for Business Landing Page (React + Tailwind CSS)"
& $git remote remove origin 2>$null
& $git remote add origin https://github.com/nguyenanhdung27/landingpage.git
& $git remote -v
