if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    # Store content of CHANGELOG.md in env variable
    $Env:changelog = [IO.File]::ReadAllText("C:\projects\design-payex-com\CHANGELOG.md")

    # Push artifact to appveyor
    Push-AppveyorArtifact "dist/release/PayEx.DesignGuide.v$($Env:GitVersion_FullSemVer).zip"
}

$formatted_basename = ($Env:basename -replace "/","\")

# Deploy to gh-pages
git config --global credential.helper store
git config --global user.email $Env:github_email
git config --global user.name "payex-dev"
Add-Content "$Env:USERPROFILE\.git-credentials" "https://$($Env:access_token):x-oauth-basic@github.com`n"
git checkout -f gh-pages
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode)  }
xcopy dist\* $formatted_basename\ /sy
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode)  }
git add .
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode)  }
git commit -m "GitHub release $Env:GitVersion_FullSemVer"
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode)  }
git push
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode)  }
