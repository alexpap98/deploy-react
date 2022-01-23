ECHO OFF
git add .
git status
set /p v="Commit Title: "
git commit -m "%v%"
git push origin main
set /p b="Do you want to commit to a different branch? (Yes/No)"
if %b%=Yes (
	set /p b="Which Branch? : "
	git push origin main:v1.2
) 
pause

