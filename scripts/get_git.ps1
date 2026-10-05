$ErrorActionPreference = 'Stop'
$zipUrl = 'https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/MinGit-2.48.1-64-bit.zip'
$outZip = 'C:\Users\DUNG\.gemini\antigravity\scratch\mingit.zip'
$dest = 'C:\Users\DUNG\.gemini\antigravity\scratch\mingit'

Write-Host "Downloading MinGit..."
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-WebRequest -Uri $zipUrl -OutFile $outZip

Write-Host "Extracting MinGit..."
Expand-Archive -Path $outZip -DestinationPath $dest -Force
Remove-Item $outZip -Force

Write-Host "Verifying git..."
& "$dest\cmd\git.exe" --version
