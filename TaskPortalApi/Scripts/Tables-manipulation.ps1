﻿$StorageAccountName = "mystorageaccount"
$StorageAccountKey = "mystoragekey"
$Ctx = New-AzureStorageContext $StorageAccountName -StorageAccountKey
$StorageAccountKey

#Create table
$tabName = "<TableName>"
New-AzureStorageTable –Name $tabName –Context $Ctx
Get-AzureStorageTable –Name $tabName –Context $Ctx
Remove-AzureStorageTable –Name $tabName –Context $Ctx