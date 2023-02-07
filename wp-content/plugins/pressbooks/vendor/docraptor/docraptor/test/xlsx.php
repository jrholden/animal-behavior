<?php
require __DIR__."/../vendor/autoload.php";
$test_name = basename(__FILE__, '.php');
$test_output_dir = dirname(__DIR__) . "/tmp/test_output/";

$docraptor = new DocRaptor\DocApi();
$docraptor->getConfig()->setUsername("YOUR_API_KEY_HERE");
// $docraptor->getConfig()->setDebug(true);

$doc = new DocRaptor\Doc();
$doc->setName("php-" . $test_name . ".pdf");
$doc->setTest(true);
$doc->setDocumentType("xlsx");
$doc->setDocumentContent("<html><body><table><tr><td>Hello from $test_name PHP</td></tr></table></body></html>");

$downloaded_document = $docraptor->createDoc($doc);

$file = fopen($test_output_dir . $test_name . "_php_" . phpversion() . ".xlsx", "wb");
$bytes_written = fwrite($file, $downloaded_document);
fclose($file);

if ($bytes_written < 3000) {
  throw new Exception("XLSX is smaller than 3k, which often means it is blank");
}

