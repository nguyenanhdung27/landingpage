@echo off
title Day code len GitHub
cd /d "C:\Users\DUNG\.gemini\antigravity\scratch\business-landing-page"
set "PATH=C:\Users\DUNG\.gemini\antigravity\scratch\mingit\cmd;%PATH%"
echo ==============================================
echo   Dang tien hanh day code len GitHub...
echo ==============================================
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo [THANH CONG] Ma nguon da duoc day len GitHub thanh cong!
) else (
    echo.
    echo [THONG BAO] Neu GitHub yeu cau xac thuc, trinh duyet se mo len de ban bam Authorize.
)
echo.
pause
