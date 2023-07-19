<?php
header('X-Frame-Options: SAMEORIGIN');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");





$actual_link = "http://" . $_SERVER['HTTP_HOST'];
/*
ob_start(function ($b) {
    return preg_replace(['/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'], ['>', '<', '\\1'], $b);
});
*/
?>
<!DOCTYPE html>
<html>
<!-- <?php echo time(); ?>faef -->

<head>
    <title>Marko Nikolić - Portfolio > CV</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    <link rel="icon" href="/?mnps=image-favicon?<?php echo time(); ?>" type="image/ico" />
    <link rel="stylesheet" href="/?mnps=stylesheet-fai?<?php echo time(); ?>" />
    <script type="text/javascript" src="/?mnps=stylesheet-js-fai?<?php echo time(); ?>"></script>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php /*  
 <script type="text/javascript" src="./?pages=vc-js-5"></script>
    <script type="text/javascript" src="./?pages=vc-js-4"></script>
    <script src="./?mnps=javascript-nfo-13"></script>
    */ ?>
    <script type="text/javascript" src="/?mnps=js-feaie?<?php echo time(); ?>"></script>
    <style>
        #box_side {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJoZXhhZ29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGV4YWdvbiBmYS13LTE4IGZhLTN4IiBzdHlsZT0iICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IiBmaWxsPSIjMzM3YWI3IiBvcGFjaXR5PSIwLjYiPiANCiAgICA8ZGVmcz4NCiAgICA8cGF0dGVybiBpZD0iaW1nMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIHNsaWNlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURVeE1pNHdNREVnTlRFeUxqQXdNU0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdOVEV5TGpBd01TQTFNVEl1TURBeE95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVFE0TWk0ME5Td3pOall1TXpFNWJDMHdMakF6TmkweU1qQXVOakl5ZGkwd0xqQTVNV013TFRJdU16WTBMVEF1TWpNM0xUUXVOamswTFRBdU5qazBMVFl1T1RZeURRb0pZeTB3TGpFMU1pMHdMamMxTmkwd0xqTXlPUzB4TGpVd05TMHdMalV5T1MweUxqSTBObU10TUM0ME1ERXRNUzQwT0RJdE1DNDRPVGN0TWk0NU15MHhMalE0TXkwMExqTTBZeTB4TGpFM01pMHlMamd4T0MweUxqY3dOaTAxTGpRM01pMDBMalUyTFRjdU9EazNEUW9KWXkweUxqYzRNaTB6TGpZek5TMDJMakk0TnkwMkxqYzFNUzB4TUM0ek9ESXRPUzR4TVRSTU1qY3pMall3TWl3MExqY3lOV010TkM0d09UUXRNaTR6TmpNdE9DNDFORFV0TXk0NE16a3RNVE11TURnMUxUUXVORE5qTFRNdU1ESTNMVEF1TXprMExUWXVNRGt5TFRBdU16a3lMVGt1TVRFNUxEQXVNREF4RFFvSll5MHlMakkyT1N3d0xqSTVOaTAwTGpVeE9Dd3dMamd4TkMwMkxqY3dPQ3d4TGpVMU1tTXRNaTR4T1RJc01DNDNNemt0TkM0ek1qZ3NNUzQzTFRZdU16YzFMREl1T0RneVREUTNMakU1TVN3eE1UVXVNVEU0WXkwMExqQTVOQ3d5TGpNMk5DMDNMalU1T0N3MUxqUTRNUzB4TUM0ek56Z3NPUzR4TVRnTkNnbGpMVEV1T0RVMExESXVOREkwTFRNdU16ZzNMRFV1TURndE5DNDFOVGdzTnk0NE9UaGpMVEF1TlRnMkxERXVOREV0TVM0d09ERXNNaTQ0TlRrdE1TNDBPRElzTkM0ek5HTXRNQzQyTURFc01pNHlNak10TUM0NU9EY3NOQzQxTVRndE1TNHhORElzTmk0NE5UWU5DZ2xqTFRBdU1EVXhMREF1TnpndE1DNHdOemNzTVM0MU5qTXRNQzR3Tnpjc01pNHpOVEpzTUM0d016WXNNakl3TGpZeU1uWXdMakE1TVdNd0xqQXdNU3c0TGpZMk9Dd3pMakU0TWl3eE5pNDRPRElzT0M0M01UZ3NNak11TWpFMkRRb0pZekl1TlRFM0xESXVPRGM1TERVdU5URTRMRFV1TXpjeExEZ3VPVE14TERjdU16Uk1Nak00TGpRc05UQTNMakkzTm1NeE1DNDVNVGdzTmk0ek1ESXNNalF1TXpjc05pNHpMRE0xTGpJNE55MHdMakF3Tm13eE9URXVNVEkxTFRFeE1DNHpPRGtOQ2dsak55NDFNRFV0TkM0ek16VXNNVE11TURJNUxURXhMakU1Tml3eE5TNDNORGN0TVRrdU1UVTNZekF1TkRrMExURXVORFEzTERBdU9EazJMVEl1T1RNeUxERXVNaTAwTGpRME5HTXdMakUxTWkwd0xqYzFOaXd3TGpJNExURXVOVEU0TERBdU16Z3lMVEl1TWpnM0RRb0pRelE0TWk0ek5EVXNNelk1TGpRMU5pdzBPREl1TkRVc0lDSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR05FSTFOVHNpSUdROUlrMDBPREl1TkRFNExERTJPUzQwT0Rac0xUQXVNREEwTFRJekxqYzVkaTB3TGpBNU1XTXdMVEF1TnpFdE1DNHdNamt0TVM0ME1UVXRNQzR3TnpFdE1pNHhNVGNOQ2dsakxUQXVNREV6TFRBdU1qQTVMVEF1TURNeExUQXVOREUyTFRBdU1EUTNMVEF1TmpJMFl5MHdMakEwTFRBdU5URTVMVEF1TURreUxURXVNRE0yTFRBdU1UVTFMVEV1TlRWakxUQXVNREkxTFRBdU1qQTBMVEF1TURRM0xUQXVOREE1TFRBdU1EYzJMVEF1TmpFeERRb0pZeTB3TGpBNU5pMHdMalk1TVMwd0xqSXdOeTB4TGpNM09DMHdMak0wTlMweUxqQTFPR010TUM0eE5USXRNQzQzTlRZdE1DNHpNamt0TVM0MU1EVXRNQzQxTWprdE1pNHlORFpqTFRBdU1pMHdMamMwTVMwd0xqUXlOUzB4TGpRM015MHdMalkzTWkweUxqRTVOdzBLQ1hNdE1DNDFNVGN0TVM0ME16Z3RNQzQ0TVRFdE1pNHhORE5qTFRBdU9EZ3RNaTR4TVRNdE1TNDVOakl0TkM0eE16VXRNeTR5TXkwMkxqQXpObU10TUM0ME1qSXRNQzQyTXpRdE1DNDROall0TVM0eU5UTXRNUzR6TXkweExqZzFPUTBLQ1dNdE1DNDJNVGN0TUM0NE1EY3RNUzR5T0RVdE1TNDFOemd0TVM0NU56SXRNaTR6TXpKakxUQXVNVGN5TFRBdU1UZzVMVEF1TXpRMkxUQXVNemMxTFRBdU5USXlMVEF1TlRZeFl5MHdMamN3TlMwd0xqY3pPUzB4TGpRek1TMHhMalEyTVMweUxqSXdNaTB5TGpFek9RMEtDV010TUM0d01ERXRNQzR3TURFdE1DNHdNREV0TUM0d01ERXRNQzR3TURNdE1DNHdNREpqTFRBdU1EQXhMVEF1TURBeExUQXVNREF4TFRBdU1EQXhMVEF1TURBekxUQXVNREF5WXkwd0xqYzNMVEF1TmpjM0xURXVOVGd6TFRFdU16RXhMVEl1TkRFMkxURXVPVEl6RFFvSll5MHdMakl4TFRBdU1UVTBMVEF1TkRJeExUQXVNekExTFRBdU5qTTBMVEF1TkRVMVl5MHdMamcxTVMwd0xqVTVOeTB4TGpjeU1TMHhMakUzTXkweUxqWXpNaTB4TGpZNU9Fd3lOek11TmpBeUxEUXVOekkxWXkwd0xqWXhOUzB3TGpNMU5TMHhMakkwTFRBdU5qZ3lMVEV1T0RjdE1DNDVPVGNOQ2dsakxUQXVNVGczTFRBdU1EazBMVEF1TXpjMkxUQXVNVGd4TFRBdU5UWTBMVEF1TWpjeFl5MHdMalEyT1Mwd0xqSXlOQzB3TGprME1TMHdMalF6TnkweExqUXhOaTB3TGpZek9XTXRNQzR4T1RFdE1DNHdPREV0TUM0ek9ERXRNQzR4TmpRdE1DNDFOelF0TUM0eU5ESU5DZ2xqTFRBdU5qUTJMVEF1TWpZeExURXVNamsyTFRBdU5UQTVMVEV1T1RVekxUQXVOek5qTFRBdU5qVTVMVEF1TWpJeExURXVNekl5TFRBdU5ERTJMVEV1T1RnNUxUQXVOVGs1WXkwd0xqRTVOeTB3TGpBMU5DMHdMak01TlMwd0xqRXdNaTB3TGpVNU1pMHdMakUxTWcwS0NXTXRNQzQwT1RZdE1DNHhNall0TUM0NU9UVXRNQzR5TkRFdE1TNDBPVFV0TUM0ek5EVmpMVEF1TVRrNUxUQXVNRFF4TFRBdU16azNMVEF1TURnMUxUQXVOVGszTFRBdU1USXlZeTB3TGpZM05pMHdMakV5T1MweExqTTFNeTB3TGpJME5DMHlMakF6TkMwd0xqTXpNZzBLQ1dNdE1DNDNOVFl0TUM0d09Ua3RNUzQxTVRZdE1DNHhOekl0TWk0eU56WXRNQzR5TWpGakxURXVOVEl4TFRBdU1EazVMVE11TURRM0xUQXVNRGszTFRRdU5UWTJMREF1TURBeFl5MHdMamMyTERBdU1EUTVMVEV1TlRJc01DNHhNalF0TWk0eU56WXNNQzR5TWpJTkNnbGpMVEF1TmpneExEQXVNRGc1TFRFdU16VTRMREF1TWpBMExUSXVNRE0yTERBdU16TXlZeTB3TGpJc01DNHdNemN0TUM0ek9UY3NNQzR3T0RFdE1DNDFPVGNzTUM0eE1qSmpMVEF1TlN3d0xqRXdOQzB3TGprNU9Dd3dMakl4T1MweExqUTVOU3d3TGpNME5RMEtDV010TUM0eE9UY3NNQzR3TlMwd0xqTTVOaXd3TGpBNU9TMHdMalU1TWl3d0xqRTFNbU10TUM0Mk5qY3NNQzR4T0RJdE1TNHpNeklzTUM0ek56Y3RNUzQ1T0Rrc01DNDFPVGx6TFRFdU16QTRMREF1TkRjdE1TNDVOVFlzTUM0M016SU5DZ2xqTFRBdU1Ua3NNQzR3TnpZdE1DNHpOemNzTUM0eE5Ua3RNQzQxTmpVc01DNHlNemxqTFRBdU5EYzVMREF1TWpBMExUQXVPVFUxTERBdU5ERTVMVEV1TkRJMkxEQXVOalEwWXkwd0xqRTROU3d3TGpBNE9TMHdMak0zTVN3d0xqRTNOaTB3TGpVMU5pd3dMakkyTncwS0NXTXRNQzQyTXpFc01DNHpNVFV0TVM0eU5UWXNNQzQyTkRRdE1TNDROeklzTVV3ME55NHhPVEVzTVRFMUxqRXhPR010TUM0d01ERXNNQzR3TURFdE1DNHdNRElzTUM0d01ERXRNQzR3TURRc01DNHdNREpqTFRBdU9URXNNQzQxTWpVdE1TNDNOemdzTVM0eE1ERXRNaTQyTWpnc01TNDJPVGNOQ2dsakxUQXVNakV5TERBdU1UVXRNQzQwTWpRc01DNHpNREV0TUM0Mk16SXNNQzQwTlRWakxUQXVPRE15TERBdU5qRXlMVEV1TmpRMkxERXVNalEzTFRJdU5ERTJMREV1T1RJMFl5MHdMakF3TVN3d0xqQXdNUzB3TGpBd05Dd3dMakF3TWkwd0xqQXdOU3d3TGpBd05RMEtDV010TUM0M056RXNNQzQyT0MweExqUTVOeXd4TGpRd01TMHlMakl3TWl3eUxqRTBNV010TUM0eE56WXNNQzR4T0RVdE1DNHpOU3d3TGpNM01TMHdMalV5TVN3d0xqVTFPV010TUM0Mk9EY3NNQzQzTlRRdE1TNHpOVE1zTVM0MU1qWXRNUzQ1TnpJc01pNHpNek1OQ2dsakxUQXVORFkwTERBdU5qQTJMVEF1T1RBM0xERXVNakkyTFRFdU16TXNNUzQ0TmpGakxUQXVOREl5TERBdU5qTTBMVEF1T0RJMUxERXVNamd4TFRFdU1qQTJMREV1T1RReFl5MHdMamMyTVN3eExqTXhPQzB4TGpRek55d3lMalk0T0MweUxqQXlNeXcwTGpBNU5nMEtDV010TUM0eU9USXNNQzQzTURVdE1DNDFOalFzTVM0ME1pMHdMamd4TVN3eUxqRTBNMk10TUM0eU5EY3NNQzQzTWpRdE1DNDBOekVzTVM0ME5UY3RNQzQyTnpFc01pNHhPVGhqTUN3d0xEQXNNQzR3TURFc01Dd3dMakF3TXcwS0NXTXRNQzR4T0N3d0xqWTJOaTB3TGpNek5Dd3hMak0wTVMwd0xqUTNOU3d5TGpBeE9XTXRNQzR3TkRFc01DNHlMVEF1TURjM0xEQXVOREF4TFRBdU1URTJMREF1TmpBeVl5MHdMakE1Tml3d0xqVXdOaTB3TGpFNE1Td3hMakF4TlMwd0xqSTFOU3d4TGpVeU5nMEtDV010TUM0d015d3dMakl3TlMwd0xqQTJNU3d3TGpRd09TMHdMakE0Tnl3d0xqWXhOV010TUM0d09EY3NNQzQyT1RRdE1DNHhOaklzTVM0ek9TMHdMakl3T1N3eUxqQTVNV010TUM0d05URXNNQzQzT0Mwd0xqQTNOeXd4TGpVMk15MHdMakEzTnl3eUxqTTFNbXd3TGpBd05Dd3lNeTQ0TURZTkNnbHNNakk0TGprME5Dd3hOUzR5TnpkTU5EZ3lMalF4T0N3eE5qa3VORGcyZWlJdlBnMEtQSEJ2YkhsbmIyNGdjM1I1YkdVOUltWnBiR3c2SXpReE5EYzVRanNpSUhCdmFXNTBjejBpTkRneUxqUTBOeXd6TkRJdU5URTBJRFE0TWk0ME1UZ3NNVFk1TGpRNE5pQXlPUzQxTlRjc01UWTVMalE0TmlBeU9TNDFPRFVzTXpReUxqVXhOQ0FpTHo0TkNqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtVeE5VRTdJaUJ3YjJsdWRITTlJakl3Tnk0NU16Y3NNVFkwTGpRMU1pQXhNVFV1TlRnekxERTJOQzQwTlRJZ01URXhMamN6TkN3eE5ERXVNelkwSURJeE1TNDNPRFFzTVRReExqTTJOQ0FpTHo0TkNqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtRek5UQTdJaUJ3YjJsdWRITTlJakV4TkM0Mk1qRXNNVFU0TGpZNElERXhOUzQxT0RNc01UWTBMalExTWlBeU1EY3VPVE0zTERFMk5DNDBOVElnTWpBNExqZzVPU3d4TlRndU5qZ2dJaTgrRFFvOFp6NE5DZ2s4Y21WamRDQjRQU0l4TlRrdU9ETWlJSGs5SWpnM0xqUTVJaUJ6ZEhsc1pUMGlabWxzYkRvalJrWkZNVFZCT3lJZ2QybGtkR2c5SWpNdU9EUTRJaUJvWldsbmFIUTlJakUxTGpNNU1pSXZQZzBLQ1R4eVpXTjBJSGc5SWpFMU5TNDVPQ0lnZVQwaU9URXVNelFpSUhOMGVXeGxQU0ptYVd4c09pTkdSa1V4TlVFN0lpQjNhV1IwYUQwaU1URXVOVFEwSWlCb1pXbG5hSFE5SWpNdU9EUTRJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdSVEUxUVRzaUlHUTlJazB5TURndU1qTTRMREUwT1M0d05tTXRNQzQwTXpZc01DMHdMamczTnkwd0xqQTNOUzB4TGpNeE1TMHdMakl5T1dNdE1TNDVPVGN0TUM0M01qVXRNeTR3TXkweUxqa3pNaTB5TGpNd05pMDBMamt6YkRndU1UVXRNakl1TkRrMURRb0pDV013TGpRd05DMHhMakV4Tml3d0xqTXdPUzB5TGpNME5pMHdMakkyTVMwekxqTTNZeTB3TGpNd01pMHdMalUwTlMweExqQXhNUzB4TGpVd015MHlMak0xT1MweExqYzVNMk10T1M0NU16Y3RNaTR4TVRJdE1qa3VNakF4TFRVdU5qWXpMVFEyTGpVek1pMDFMalkyTTJndE15NDNNVFlOQ2drSll5MHhOeTR6TXpJc01DMHpOaTQxT1RVc015NDFOVEl0TkRZdU5UTTJMRFV1TmpZM1l5MHhMak0wTml3d0xqSTROaTB5TGpBMU15d3hMakkwTXkweUxqTTFOaXd4TGpjNE9HTXRNQzQxTnl3eExqQXlOaTB3TGpZMk5Td3lMakkxTkMwd0xqSTFPU3d6TGpNM2JEZ3VNVFE1TERJeUxqUTVOUTBLQ1Fsak1DNDNNalVzTVM0NU9Ua3RNQzR6TURrc05DNHlNRFV0TWk0ek1EWXNOQzQ1TTJNdE1TNDVPVFlzTUM0M01UUXROQzR5TURndE1DNHpNVEl0TkM0NU1qa3RNaTR6TURkc0xUZ3VNVFV6TFRJeUxqUTVOV010TVM0eE5qTXRNeTR5TURrdE1DNDRPRFV0Tmk0M05UTXNNQzQzTmpVdE9TNDNNalVOQ2drSll6RXVOVGt6TFRJdU9EYzBMRFF1TXpJdE5DNDVNVEVzTnk0ME9ESXROUzQxT0RWak1UQXVNak00TFRJdU1UYzVMRE13TGpFd05DMDFMamd6Tml3ME9DNHhOREV0TlM0NE16Wm9NeTQzTVRaak1UZ3VNRE0yTERBc016Y3VPVEF5TERNdU5qVTNMRFE0TGpFek55dzFMamd6TWcwS0NRbGpNeTR4Tmpjc01DNDJOellzTlM0NE9USXNNaTQzTVRNc055NDBPRFVzTlM0MU9EaGpNUzQyTlN3eUxqazNNeXd4TGpreU9DdzJMalV4Tml3d0xqYzJOeXc1TGpjeU5Xd3RPQzR4TlRNc01qSXVORGsxRFFvSkNVTXlNVEV1TWpnNUxERTBPQzR3T0Rjc01qQTVMamd4TERFME9TNHdOaXd5TURndU1qTTRMREUwT1M0d05ub2lMejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkZNVFZCT3lJZ1pEMGlUVEUyTVM0M056UXNNVFExTGpZNU5HTXRNaTR4TWpZc01DMHpMamcwT0MweExqY3lNUzB6TGpnME9DMHpMamcwT0ZZeE1UQXVOVGhqTUMweUxqRXlOeXd4TGpjeU15MHpMamcwT0N3ekxqZzBPQzB6TGpnME9BMEtDUWxqTWk0eE1qWXNNQ3d6TGpnME9Dd3hMamN5TVN3ekxqZzBPQ3d6TGpnME9IWXpNUzR5TmpWRE1UWTFMall5TXl3eE5ETXVPVGN5TERFMk15NDVMREUwTlM0Mk9UUXNNVFl4TGpjM05Dd3hORFV1TmprMGVpSXZQZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrVXhOVUU3SWlCa1BTSk5NVGc0TGpNM05pd3hORGt1TURaakxUQXVNallzTUMwd0xqVXlNaTB3TGpBeU5pMHdMamM0TlMwd0xqQTNPV010TWk0d09ESXRNQzQwTXpJdE15NDBNVGd0TWk0ME5qa3RNaTQ1T0RVdE5DNDFOVEVOQ2drSmJEUXVOalkzTFRJeUxqUTVOV013TGpZd055MHlMamt6TWkwd0xqTTBOQzAxTGpRNU55MHdMamc0TkMwMUxqazBPR010TlM0ek16WXRNUzQ1TlRndE1UWXVNRFF4TFRVdU5EQTNMVEkxTGpVMk5TMDFMalF3TjJndE1pNHhNamtOQ2drSll5MDVMalV5TlN3d0xUSXdMakl5T0N3ekxqUTBPUzB5TlM0M05qSXNOUzQxTVdNdE1DNHpORElzTUM0ek5TMHhMakk1TWl3eUxqa3hOeTB3TGpZNE5pdzFMamcwTjJ3MExqWTJOeXd5TWk0ME9UVmpNQzQwTXpJc01pNHdPREl0TUM0NU1EUXNOQzR4TVRrdE1pNDVPRFVzTkM0MU5URU5DZ2tKWXkweUxqQTRNeXd3TGpRd01pMDBMakV5TFRBdU9UQTJMVFF1TlRRNUxUSXVPVGc0YkMwMExqWTJOeTB5TWk0ME9UVmpMVEV1TVRZekxUVXVOakEzTERBdU5qSXlMVEV5TGpjNE9DdzFMalV6TXkweE5DNDJNakpqTnk0ek5UVXRNaTQzTXpZc01UZ3VNalU0TFRVdU9Ua3pMREk0TGpRMUxUVXVPVGt6RFFvSkNXZ3lMakV5T1dNeE1DNHhPVEVzTUN3eU1TNHdPVE1zTXk0eU5UZ3NNamd1TkRRMkxEVXVPVGxqTkM0NU1UVXNNUzQ0TXpjc05pNDNNREVzT1M0d01Ua3NOUzQxTXpjc01UUXVOakkyYkMwMExqWTJOeXd5TWk0ME9UVU5DZ2tKUXpFNU1TNDNOaklzTVRRM0xqZ3hNeXd4T1RBdU1UWXNNVFE1TGpBMkxERTRPQzR6TnpZc01UUTVMakEyZWlJdlBnMEtQQzluUGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUkRNMU1Ec2lJSEJ2YVc1MGN6MGlNVEV5TGpZNU5pd3hORGN1TVRNMklESXhNQzQ0TWpNc01UUTNMakV6TmlBeU1URXVOemcwTERFME1TNHpOalFnTVRFeExqY3pOQ3d4TkRFdU16WTBJQ0l2UGcwS1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdORUkxTlRzaUlHUTlJazA0T0M0Mk5EY3NNVFkwTGpRMU1tTXRNaTR4TWpZc01DMHpMamcwT0N3eExqY3lNeTB6TGpnME9Dd3pMamcwT0hZeE16UXVNemczWXpBc05ESXVOalk0TERNMExqUTFOeXczTnk0eU5UZ3NOell1T1RZeExEYzNMakkxT0EwS0NYTTNOaTQ1TmpFdE16UXVOVGc1TERjMkxqazJNUzAzTnk0eU5UaFdNVFk0TGpOak1DMHlMakV5TmkweExqY3lNeTB6TGpnME9DMHpMamcwT0MwekxqZzBPRWc0T0M0Mk5EZDZJaTgrRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVEUyT1M0ME5UWXNNamt4TGpRek9XdzNMalk1TnkweE9TNHlOREZzTFRFMUxqTTVNaXd6TGpnME9Hd3RNVFV1TXpreUxUTXVPRFE0YkRjdU5qazNMREU1TGpJME1Xd3RNVGt1TWpReExEWTFMalF4TncwS0NXTXdMREFzTVRFdU5UUTBMRGN1TmprM0xESTJMamt6Tml3M0xqWTVOM015Tmk0NU16WXROeTQyT1Rjc01qWXVPVE0yTFRjdU5qazNUREUyT1M0ME5UWXNNamt4TGpRek9Yb2lMejROQ2p4d2IyeDVaMjl1SUhOMGVXeGxQU0ptYVd4c09pTkdSa1V4TlVFN0lpQndiMmx1ZEhNOUlqRXpNeTQ0T0Rrc016QTJMamswT0NBeE1qY3VNU3d6TURndU5qUTFJREUwTWk0d016VXNNamd4TGpjMk15QXhNelV1TXpBNExESTNPQzR3TWpjZ01URTNMakUyT0N3ek1UQXVOamdnRFFvSk1UQXdMakU1TERNeE1DNDJPQ0F4TURBdU1Ua3NNekU0TGpNM05pQXhNRGd1TkRZc016RTRMak0zTmlBNU55NDNPRGNzTXpJMkxqa3hOQ0F4TURJdU5UazBMRE16TWk0NU1qWWdNVEV4TGpZMU9Td3pNalV1TmpjeklERXdPQzR3T0RRc016TTJMak01T1NBeE1UVXVNemcyTERNek9DNDRNek1nRFFvSk1USXlMalF4TkN3ek1UY3VOelE0SURFek5TNDNOVGdzTXpFMExqUXhNU0FpTHo0TkNqeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkdOVVkxUmpVN0lpQmtQU0pOTVRNMExqZ3lNeXd5TURJdU9UTXpiQzB4Tnk0MU5qWXRPQzQzT0ROakxUTXVNakkzTFRFdU5qRXpMVFF1T1MwMUxqSTFNUzAwTGpBeU5TMDRMamMxYkRBdU9Ua3pMVE11T1RjMERRb0pZekF1TmprdE1pNDNOVGd0TVM0ek9UWXROUzQwTWprdE5DNHlNemt0TlM0ME1qbGpMVEV1TXpJM0xEQXRNaTQxT0RNc01DNDJNRFF0TXk0ME1USXNNUzQyTkdNdE9TNHhNVFVzTVRFdU16a3pMVEUwTGpBNExESTFMalUwT1MweE5DNHdPQ3cwTUM0eE5IWTRNUzR6TlRrTkNnbGpNQ3d3TERFMkxqQTJPUzB6TGpJeE5Dd3pNQzQxT0RVdE1qUXVNekkyWXpJdU5qWTJMVE11T0RjMkxEY3VNRFV5TFRZdU1UY3hMREV4TGpjeU9DMDJMalF4TVd3dE55NDJPQ3d5TXk0d05ERnNNVFV1TXpreUxETXVPRFE0YkRFekxqUTJPUzB4Tmk0d01qaE1NVE0wTGpneU15d3lNREl1T1RNemVpSU5DZ2t2UGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUlRFMVFUc2lJSEJ2YVc1MGN6MGlNVGc1TGpZekxETXdOaTQ1TkRnZ01UazJMalF5TERNd09DNDJORFVnTVRneExqUTROU3d5T0RFdU56WXpJREU0T0M0eU1USXNNamM0TGpBeU55QXlNRFl1TXpVeUxETXhNQzQyT0NBTkNna3lNak11TXpJNUxETXhNQzQyT0NBeU1qTXVNekk1TERNeE9DNHpOellnTWpFMUxqQTJMRE14T0M0ek56WWdNakkxTGpjek1pd3pNall1T1RFMElESXlNQzQ1TWpZc016TXlMamt5TmlBeU1URXVPRFl4TERNeU5TNDJOek1nTWpFMUxqUXpOaXd6TXpZdU16azVJREl3T0M0eE16UXNNek00TGpnek15QU5DZ2t5TURFdU1UQTJMRE14Tnk0M05EZ2dNVGczTGpjMk1pd3pNVFF1TkRFeElDSXZQZzBLUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBZMVJqVkdOVHNpSUdROUlrMHhPRGd1TmprM0xESXdNaTQ1TXpOc01UY3VOVFkyTFRndU56Z3pZek11TWpJM0xURXVOakV6TERRdU9TMDFMakkxTVN3MExqQXlOUzA0TGpjMWJDMHdMams1TXkwekxqazNOQTBLQ1dNdE1DNDJPUzB5TGpjMU9Dd3hMak01TmkwMUxqUXlPU3cwTGpJek9TMDFMalF5T1dNeExqTXlOeXd3TERJdU5UZ3pMREF1TmpBMExETXVOREV5TERFdU5qUmpPUzR4TVRVc01URXVNemt6TERFMExqQTRMREkxTGpVME9Td3hOQzR3T0N3ME1DNHhOSFk0TVM0ek5Ua05DZ2xqTUN3d0xURTJMakEyT1MwekxqSXhOQzB6TUM0MU9EVXRNalF1TXpJMll5MHlMalkyTmkwekxqZzNOaTAzTGpBMU1pMDJMakUzTVMweE1TNDNNamd0Tmk0ME1URnNOeTQyT0N3eU15NHdOREZNTVRneExESTVOUzR5T0Rsc0xURXpMalEyT1MweE5pNHdNamhNTVRnNExqWTVOeXd5TURJdU9UTXplaUlOQ2drdlBnMEtQR2MrRFFvSlBIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFpHUlRFMVFUc2lJSEJ2YVc1MGN6MGlNVE00TGpZM01pd3hOelV1T1RrM0lERXhPUzQwTXpFc01UYzFMams1TnlBeE1qVXVNakF6TERFNE15NDJPVE1nTVRNNExqWTNNaXd4T0RjdU5UUXhJREV6TUM0NU56VXNNVGt4TGpNNE9TQU5DZ2tKTVRReUxqVXlMREU1TVM0ek9Ea2dDU0l2UGcwS0NUeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HUmtVeE5VRTdJaUJ3YjJsdWRITTlJakU0TkM0NE5EZ3NNVGMxTGprNU55QXlNRFF1TURnNUxERTNOUzQ1T1RjZ01UazRMak14Tnl3eE9ETXVOamt6SURFNE5DNDRORGdzTVRnM0xqVTBNU0F4T1RJdU5UUTFMREU1TVM0ek9Ea2dEUW9KQ1RFNE1Td3hPVEV1TXpnNUlBa2lMejROQ2p3dlp6NE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HTlVZMVJqVTdJaUJrUFNKTk1UZzNMalUxTnl3eE56SXVPVGhzTFRFNExqRXdNU3d6TGpBeE4yd3ROeTQyT1Rjc01UVXVNemt5YkMwM0xqWTVOeTB4TlM0ek9USnNMVEU0TGpFd01TMHpMakF4TncwS0NXTXRNaTR3TnpZdE1DNHpORFl0TXk0Mk5qY3NNUzQ0TURndE1pNDNNallzTXk0Mk9XdzVMakk0TkN3eE9DNDFOalpzTFRjdU5qazNMRGN1TmprM2FESTJMamt6Tm1neU5pNDVNelpzTFRjdU5qazNMVGN1TmprM2JEa3VNamd5TFRFNExqVTJOZzBLQ1VNeE9URXVNakkwTERFM05DNDNPRGdzTVRnNUxqWXpNeXd4TnpJdU5qTTBMREU0Tnk0MU5UY3NNVGN5TGprNGVpSXZQZzBLUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakUyTVM0M05pSWdZM2s5SWpFME15NHdOU0lnY2owaU5TNDNOeklpTHo0TkNqeGxiR3hwY0hObElITjBlV3hsUFNKbWFXeHNPaU0wTVRRM09VSTdJaUJqZUQwaU1UWXhMalk0SWlCamVUMGlNVFUyTGpneklpQnllRDBpTkM0MU5qTWlJSEo1UFNJekxqSXdOeUl2UGcwS1BHVnNiR2x3YzJVZ2MzUjViR1U5SW1acGJHdzZJMFpHTkVJMU5Uc2lJR040UFNJeE16Z3VPVEVpSUdONVBTSXhOVFl1T0RNaUlISjRQU0kwTGpVMk15SWdjbms5SWpNdU1qQTNJaTgrRFFvOFp6NE5DZ2s4Wld4c2FYQnpaU0J6ZEhsc1pUMGlabWxzYkRvak5ERTBOemxDT3lJZ1kzZzlJakV4Tmk0eE5DSWdZM2s5SWpFMU5pNDRNeUlnY25nOUlqUXVOVFl6SWlCeWVUMGlNeTR5TURjaUx6NE5DZ2s4Wld4c2FYQnpaU0J6ZEhsc1pUMGlabWxzYkRvak5ERTBOemxDT3lJZ1kzZzlJakl3Tnk0eU1pSWdZM2s5SWpFMU5pNDRNeUlnY25nOUlqUXVOVFl6SWlCeWVUMGlNeTR5TURjaUx6NE5Dand2Wno0TkNqeGxiR3hwY0hObElITjBlV3hsUFNKbWFXeHNPaU5HUmpSQ05UVTdJaUJqZUQwaU1UZzBMalExSWlCamVUMGlNVFUyTGpneklpQnllRDBpTkM0MU5qTWlJSEo1UFNJekxqSXdOeUl2UGcwS1BHYytEUW9KUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakU0T0M0MUlpQmplVDBpTVRRekxqQTFJaUJ5UFNJMUxqYzNNaUl2UGcwS0NUeGphWEpqYkdVZ2MzUjViR1U5SW1acGJHdzZJMFpHUWtVMU1Ec2lJR040UFNJeU1Ea3VOakVpSUdONVBTSXhORE11TURVaUlISTlJalV1TnpjeUlpOCtEUW9KUEdOcGNtTnNaU0J6ZEhsc1pUMGlabWxzYkRvalJrWkNSVFV3T3lJZ1kzZzlJakV6TlM0d05DSWdZM2s5SWpFME15NHdOU0lnY2owaU5TNDNOeklpTHo0TkNnazhZMmx5WTJ4bElITjBlV3hsUFNKbWFXeHNPaU5HUmtKRk5UQTdJaUJqZUQwaU1URXpMamt6SWlCamVUMGlNVFF6TGpBMUlpQnlQU0kxTGpjM01pSXZQZzBLUEM5blBnMEtQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJelF4TkRjNVFqc2lJR1E5SWsweE5qZ3VNemc1TERFeE1DNDFOemxqTUM0Mk5qRXRNUzR4TXpZc01TNHdOamN0TWk0ME16a3NNUzR3TmpjdE15NDRORGhqTUMwMExqSTFMVE11TkRRMUxUY3VOamszTFRjdU5qazNMVGN1TmprM0RRb0pZeTAwTGpJMUxEQXROeTQyT1Rjc015NDBORFV0Tnk0Mk9UY3NOeTQyT1Rkak1Dd3hMalF4TERBdU5EQTJMREl1TnpFeUxERXVNRFkzTERNdU9EUTRTREUyT0M0ek9EbDZJaTgrRFFvOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWTBRalUxT3lJZ1pEMGlUVEUyTVM0M05Ua3NNamd4TGpneE9XTXRNVFV1T1RFMExEQXRNamd1T0RZeExURXlMamswTmkweU9DNDROakV0TWpndU9EWXhkaTAxTVM0NU5XZzFOeTQzTWpKMk5URXVPVFVOQ2dsRE1Ua3dMall5TERJMk9DNDROelFzTVRjM0xqWTNOU3d5T0RFdU9ERTVMREUyTVM0M05Ua3NNamd4TGpneE9Yb2lMejROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOQk5UUkNOVEE3SWlCa1BTSk5NVGc0TGpZNU55d3lNREl1T1RNemRqVXdMakF5TldNd0xERTBMamczTmkweE1pNHdOaXd5Tmk0NU16WXRNall1T1RNMkxESTJMamt6Tm5NdE1qWXVPVE0yTFRFeUxqQTJMVEkyTGprek5pMHlOaTQ1TXpaMkxUVXdMakF5TlEwS0NVd3hPRGd1TmprM0xESXdNaTQ1TXpNZ1RURTVNaTQxTkRVc01UazVMakE0TldndE15NDRORGhvTFRVekxqZzNNMmd0TXk0NE5EaDJNeTQ0TkRoMk5UQXVNREkxWXpBc01UWXVPVGMxTERFekxqZ3hMRE13TGpjNE5Td3pNQzQzT0RRc016QXVOemcxRFFvSmN6TXdMamM0TkMweE15NDRNU3d6TUM0M09EUXRNekF1TnpnMWRpMDFNQzR3TWpWMkxUTXVPRFE0U0RFNU1pNDFORFY2SWk4K0RRbzhaejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJqVkdOVVkxT3lJZ1pEMGlUVEUxTlM0NU9EY3NNamM1TGpJMll6RXVPRFl5TERBdU5EQTNMRE11TnpnNUxEQXVOak0xTERVdU56Y3lMREF1TmpNMWN6TXVPVEV4TFRBdU1qSTVMRFV1TnpjeUxUQXVOak0xZGkwM05pNHpNamRvTFRFeExqVTBOQTBLQ1FsRE1UVTFMams0Tnl3eU1ESXVPVE16TERFMU5TNDVPRGNzTWpjNUxqSTJMREUxTlM0NU9EY3NNamM1TGpJMmVpSXZQZzBLQ1R4eVpXTjBJSGc5SWpFek5DNDRNeUlnZVQwaU1qTTBMalk1SWlCemRIbHNaVDBpWm1sc2JEb2pSalZHTlVZMU95SWdkMmxrZEdnOUlqVXpMamczTXlJZ2FHVnBaMmgwUFNJeE1TNDFORFFpTHo0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwSyIgeD0iMTE4IiB5PSIyMDAiIHdpZHRoPSIxNTVweCIgaGVpZ2h0PSIxNTVweCIvPg0KICAgICAgICA8L3BhdHRlcm4+DQogICAgPC9kZWZzPg0KICAgIDxwYXRoIGQ9Im0zMy4zOTA2MjUgMjYxLjMyMDMxMmg2Ni43NzM0MzdsMzMuMzg2NzE5LTU3LjgyODEyNC0zMy4zODY3MTktNTcuODI4MTI2aC02Ni43NzM0MzdsLTMzLjM5MDYyNSA1Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzLjM5MDYyNSA0MTEuMzIwMzEyaDY2Ljc3MzQzN2wzMy4zODY3MTktNTcuODI4MTI0LTMzLjM4NjcxOS01Ny44MjgxMjZoLTY2Ljc3MzQzN2wtMzMuMzkwNjI1IDU3LjgyODEyNnptMCAwIi8+DQogICAgPHBhdGggZD0ibTI4NS42ODc1IDE0NS42NjQwNjItMzMuMDg5ODQ0IDU3LjMwNDY4OC0uMzAwNzgxLjUyMzQzOC4zMDA3ODEuNTIzNDM3IDMzLjA4OTg0NCA1Ny4zMDQ2ODdoNjYuNzc3MzQ0bDMzLjM4NjcxOC01Ny44MjgxMjQtMzMuMzg2NzE4LTU3LjgyODEyNnptMCAwIi8+DQogICAgPHBhdGggZD0ibTM3OC42MTMyODEgMTMwLjY2MDE1NiAzMy4zOTA2MjQgNTcuODI4MTI1aDY2Ljc3MzQzOGwzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MjgxMjVoLTY2Ljc3MzQzOHptMCAwIi8+DQoNCg0KDQogICAgPHBhdGggZD0ibTEyNi4xNDg0MzggMTMwLjY2MDE1NiAzMy4zOTA2MjQgNTcuODI4MTI1aDY2Ljc3MzQzOGwzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MjgxMjVoLTY2Ljc3MzQzOHptMCAwIi8+DQogICAgPHBhdGggZD0ibTI1Mi4yOTY4NzUgNTcuODI4MTI1IDMzLjM5MDYyNSA1Ny44MzIwMzFoNjYuNzc3MzQ0bDMzLjM4NjcxOC01Ny44MzIwMzEtMzMuMzg2NzE4LTU3LjgyODEyNWgtNjYuNzc3MzQ0em0wIDAiLz4NCiAgICA8cGF0aCBkPSJtMjI2LjMxMjUgMzM0LjE1MjM0NCAzMy4zOTA2MjUtNTcuODI4MTI1LTMzLjM5MDYyNS01Ny44MzIwMzFoLTY2Ljc3MzQzOGwtMzMuMzkwNjI0IDU3LjgzMjAzMSAzMy4zOTA2MjQgNTcuODI4MTI1em0wIDAiIGZpbGw9InVybCgjaW1nMSkiLz4NCg0KDQoNCg0KPC9zdmc+);
        }

        #box_back,
        #backgro_row {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJoZXhhZ29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtaGV4YWdvbiBmYS13LTE4IGZhLTN4IiBzdHlsZT0iICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IiBmaWxsPSIjMzM3YWI3IiBvcGFjaXR5PSIwLjYiPiANCiAgICANCiAgICA8cGF0aCBkPSJtMzMuMzkwNjI1IDI2MS4zMjAzMTJoNjYuNzczNDM3bDMzLjM4NjcxOS01Ny44MjgxMjQtMzMuMzg2NzE5LTU3LjgyODEyNmgtNjYuNzczNDM3bC0zMy4zOTA2MjUgNTcuODI4MTI2em0wIDAiLz4NCiAgICA8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMy4zOTA2MjUgNDExLjMyMDMxMmg2Ni43NzM0MzdsMzMuMzg2NzE5LTU3LjgyODEyNC0zMy4zODY3MTktNTcuODI4MTI2aC02Ni43NzM0MzdsLTMzLjM5MDYyNSA1Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yODUuNjg3NSAxNDUuNjY0MDYyLTMzLjA4OTg0NCA1Ny4zMDQ2ODgtLjMwMDc4MS41MjM0MzguMzAwNzgxLjUyMzQzNyAzMy4wODk4NDQgNTcuMzA0Njg3aDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODI4MTI0LTMzLjM4NjcxOC01Ny44MjgxMjZ6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0zNzguNjEzMjgxIDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KDQoNCg0KICAgIDxwYXRoIGQ9Im0xMjYuMTQ4NDM4IDEzMC42NjAxNTYgMzMuMzkwNjI0IDU3LjgyODEyNWg2Ni43NzM0MzhsMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODI4MTI1aC02Ni43NzM0Mzh6bTAgMCIvPg0KICAgIDxwYXRoIGQ9Im0yNTIuMjk2ODc1IDU3LjgyODEyNSAzMy4zOTA2MjUgNTcuODMyMDMxaDY2Ljc3NzM0NGwzMy4zODY3MTgtNTcuODMyMDMxLTMzLjM4NjcxOC01Ny44MjgxMjVoLTY2Ljc3NzM0NHptMCAwIi8+DQogICAgPHBhdGggZD0ibTIyNi4zMTI1IDMzNC4xNTIzNDQgMzMuMzkwNjI1LTU3LjgyODEyNS0zMy4zOTA2MjUtNTcuODMyMDMxaC02Ni43NzM0MzhsLTMzLjM5MDYyNCA1Ny44MzIwMzEgMzMuMzkwNjI0IDU3LjgyODEyNXptMCAwIiAgLz4NCg0KDQoNCg0KPC9zdmc+);

        }

        :root {
            --blue_color: #337ab7;
        }


        #backgro_row {
            width: 139px;
            height: 120px;
            margin-top: -120px;
            margin-left: 540px;
            background-size: 91px;
            background-repeat: no-repeat;
            background-position-x: 68px;
            background-position-y: 30px;
        }

        * {}

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }


        ::-webkit-scrollbar-track {
            /* background: rgba(51, 122, 183, 0.39); */
        }


        ::-webkit-scrollbar-thumb {
            background: var(--blue_color);
            ;
        }

        ::-webkit-scrollbar-thumb:hover {}

        #sckills {
            text-align: left;
            padding-left: 25px;
        }

        .skill_row_coll {
            margin-bottom: 5px !important;
        }

        .icon_of_text {
            margin-top: 4px !important;
        }

        #skills_div {
            margin-top: 655px;
        }

        #skills_div .inIcon_of_icon_icon_is_icon {
            font-weight: bold;
            font-size: 18px;
        }

        #skills_div .inIcon_of_icon_icon_is_icon .fa-address-book-libary {
            margin-right: 5px;
        }

        #footer_cv {
            background: var(--blue_color);
            color: white;
            padding: 1px;
            margin-top: 32px;
        }

        #footer_cv #round_top {
            margin-left: -1px;
            margin-top: -31px;
        }


        #skills_div .ksills_ff {
            padding-bottom: 15px;
        }













        .box_div_id {
            height: 1392px;
            width: 680px;
            min-height: 1346px;
            max-height: 1346px;
            min-width: 680px;
            max-width: 680px;
            margin-left: auto;
            background-size: 136px;
            background-repeat: no-repeat;
            background-position-x: -11px;
            background-position-y: -30px;
            margin-right: auto;
            display: block;
            margin-top: 30px;
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
            border-left: 4px solid var(--blue_color);
            color: var(--blue_color);
            text-align: center;
            /* margin-bottom: 50px; */
        }


        .box_div_id .box1 {
            font-family: D3;
            padding-top: 11px;
            font-weight: normal;
            font-size: 46px;
            text-shadow: 1px 1px #c0c0c0ad;
        }

        #box_back {}

        .main_label_and_icon {
            display: inline-flex;
        }

        #right_coll {
            position: absolute;
            margin-left: 300px;
            width: 40px;
            height: 50px;
            margin-top: 0px;
        }

        #right_coll .separator {

            width: 280px;
            margin-top: 5px;
        }

        #right_coll #cont1 {
            width: max-content;
        }

        .main_label_and_icon {
            display: inline-flex;
        }


        .main_label_and_icon {
            padding-left: 10px;
        }


        #skkkaeri {
            background: var(--blue_color);
            width: 574px;
            color: white;
            padding: 7px;
            margin-left: -25px;
            padding-left: 25px;
            border-top-right-radius: 30px;
            padding-right: 60px;
            border-bottom-right-radius: 30px;
        }

        #skkkaeri #round_top {
            margin-bottom: 45px !important;
            margin-top: -37px !important;
            margin-left: -25px !important;
            border-top-right-radius: 30px !important;
        }

        #skkkaeri #round_bottom {
            margin-top: -3px;
            margin-bottom: -10px;
            margin-left: -25px !important;
            border-bottom-right-radius: 50px !important;
        }

        #skkkaeri #round_bottom #ff2 {
            border-bottom-right-radius: 20px !important;
        }

        #skills_div #round_bottom #ff {
            border-bottom-right-radius: 50px;
        }

        #skills_div #round_top #ff2 {
            border-top-right-radius: 24px !important;
        }

        #skills_div #round_top #ff {
            border-top-right-radius: 50px !important;
        }













        .main_label_and_icon .fa-graduation-cap,
        .main_label_and_icon .fa-puzzle-piece,
        .main_label_and_icon .fa-tools {
            padding-left: 10px;
            padding-right: 10px;
        }


        .main_label_and_icon_2 {
            text-align: center;
            display: block;
            width: 306px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: -5px !important;
            text-align: center;

        }

        .box2 h1 {
            font-family: D3;
            padding-top: 10px;
            font-weight: normal;
            font-size: 46px;
            text-shadow: 1px 1px #c0c0c0ad;
        }


        #cont {
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
            border-left: 4px solid var(--blue_color);


            margin-left: 15px;
            margin-right: 15px;
            padding-bottom: 1px;
            padding-top: 1px;

        }

        .main_label_fffear_FFFA {
            padding: 0px !important;
            margin-left: -10px;
        }

        .main_label {
            font-size: 22px;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .main_label_fffear {
            word-break: break-all;
            width: 340px;
        }

        #info_email {
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
        }


        #cont1 .info_email_code span {
            padding-left: 10px;
        }

        #cont1 .info_email_code a {
            padding-left: 10px;
        }

        button {
            border: 0px;
            padding: 7px;
            margin-left: auto;
            margin-right: auto;
            display: block;
            margin-top: 10px;
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
            color: currentColor;
            background: var(--blue_color);
            text-align: center;
            margin-bottom: 10px;
            text-transform: uppercase;
            border: 2px dashed;
            border-radius: 10px;
            font-size: 13px;
        }

        button:hover {
            background: var(--blue_color);
            color: white;
        }

        #canvas {
            width: 200px;
            height: 200px;

            position: absolute;
            left: 80px;
            top: 50px;
            z-index: -1;
        }


        .font {
            font-family: arial;

        }

        p {
            font-family: arial;
        }

        .box2 h1 {
            margin-top: -10px;
        }

        .separator {


            display: block;
            width: auto;
            height: 4px;
            margin-left: 13px;
            margin-right: 13px;
            margin-top: -15px;
            background: var(--blue_color);
            box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
            border-radius: 100px;
        }


        #hrcod {
            /* position: absolute; */
            width: 140px;
            /* top: 409px; */
            /* left: 420px; */
            float: right;
            margin-right: 17px;
            margin-top: 5px;
        }



        body {
            margin: 0px;
            width: 680px;
            min-width: 680px;
            max-width: 680px;
            padding-top: -43px;
            height: 1346px !important;
            min-height: 1346px !important;
            max-height: 1346px !important;
        }

        .f1 {
            font-size: 20px;
        }

        .fa-map-marker-alt {
            margin-right: 2px;
        }

        .copyrig {
            position: fixed;
            top: 0px;
            width: 100%;
            background: var(--blue_color);
            color: white;
            text-align: center;
            box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
            border-bottom: 3px dashed white;

        }


        .copyrig1 {
            position: fixed;
            bottom: 0px;
            width: 100%;
            background: var(--blue_color);
            border-top: 3px dashed white;
            color: white;
            text-align: center;
            box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;


        }

        .fa-download {
            margin-right: 4px;
            margin-top: 6px;
        }



        #downloadfiler {
            color: white;
            text-decoration: none;

        }

        #downloadfiler:hover {

            color: silver;
        }

        .box_div_id,
        div {
            cursor: default;
        }

        #round_ffae {
            transition: 0.1s;
        }




        #instructions {
            color: var(--blue_color);
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: -webkit-fill-available;
            position: absolute;
            margin: 20px;
            border: 2px dashed var(--blue_color);

        }


        #box_represantion {
            text-align: center;
            width: 100%;
        }


        #round_top {
            margin-top: -50px;
            margin-left: 0px;
            margin-bottom: 49px;
        }

        #round_bottom {
            margin-bottom: -20px;
        }

        #ff {
            width: 30px;
            height: 30px;
            position: absolute;
            background: var(--blue_color)
        }

        #round_top #ff2 {
            width: 30px;
            height: 30px;

            background: white;
            position: absolute;
            border-bottom-left-radius: 30px;
        }


        #round_bottom #ff2 {
            width: 30px;
            height: 30px;

            background: white;
            position: absolute;
            border-top-left-radius: 30px;
        }





        #left_coll .separator {
            position: absolute;
            width: -webkit-fill-available;
            box-shadow: 0 0px 4px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
        }

        #left_coll .seperator_white {
            box-shadow: 0 0px 4px 0 #fff, 0 6px 3077px 0 #fff !important;
            background: #fff;
        }

        #cv_profile_img {
            width: 150px;
            /* position: absolute; */
            height: 150px;
            /* margin-top: 50px; */
            object-fit: cover;
            /* margin-left: -342px; */
            border-radius: 100px;
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.10);
            transition: 0.3s;

        }

        #cv_profile_img:hover {

            border-radius: 10px;
        }

        #left_coll #cont1 {
            margin-top: -6px;
        }

        #left_coll {
            position: absolute;
            /* margin-top: 55px; */
            background: var(--blue_color);
            padding-top: 20px;
            color: white !important;
            padding-bottom: 20px;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
        }

        #round_ffae {
            background: var(--blue_color);
            position: fixed;
            z-index: 333;
            width: 45px;
            height: 45px;
            border-radius: 100%;
            border: 3px dashed white;
            box-shadow: 0 0px 8px 0 var(--blue_color)c7, 0 6px 3077px 0 var(--blue_color)00;
            top: 9px;
            right: 30px;
            tranfsorm: .0.001s;
        }

        #round_ffae svg {
            width: 100%;
            height: 20px;
            margin-top: 11.4px;
        }

        #round_ffae svg path {
            fill: white !important;
        }

        #round_ffae:hover {
            background: red;
        }

        #div_box_center {
            display: block;
            width: 680px !important;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            background: white;
            margin-top: -31px;
        }
    </style>
</head>

<body ondragstart="return false;" onselect="return false;" id="body">
    <div id="meta_div">
        <div id="div_box_center">
            <div id="box_side" class="box3 box_div_id">
                <h1 class="box1"><a id="color1">Marko</a> Nikolić</h1>
                <span class="separator"></span>
                <p class="font f1 font_btmna">Developer / Photographer from Serbia/Belgrade</p>

                <div id="left_coll">
                    <div id="round_top">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                    <img id="cv_profile_img" src="/visitcard/ff_FA/cv_pdf/230r.png#f<?php echo time(); ?>" />
                    <p class="main_label">Contact</p>
                    <br>
                    <span class="separator seperator_white"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-map-marker-alt"></i><span>Serbia/Belgrade/Surčin</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-phone"></i><span>+381/061-1305200</span></p>
                        <p id="info_email" class="info_email_code"><i class="fab fa-linkedin"></i><span>linkedin.com/in/marko-nikolic-49385a283</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-at"></i><span>marko.supergun@gmail.com</span></p>
                        <p id="info_email" class="info_email_code"><i class="fab fa-github"></i><span>github.com/marko9827</span></p>
                        <p></p>
                    </div>
                    <p class="main_label ">Language</p>
                    <br>
                    <span class="separator seperator_white"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>Serbian <br> Mother tongue</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-language"></i><span>English <br> Excellent both written & oral</span></p>
                    </div>
                    <div id="round_bottom">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                </div>

                <div id="right_coll">
                    <p class="main_label main_label_and_icon"><i class="fas fa-graduation-cap"></i> Education</p>
                    <span class="separator"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code"><i class="fas fa-graduation-cap"></i><span>Singidunum University<br>Information Technology and Computing</span></p>
                        <p id="info_email" class="info_email_code"><i class="fas fa-award"></i><span>Tehnicka Skola Novi Beograd<br>Modeling, Virtual Environments and Simulation</span></p>
                        <p></p>
                    </div>
                    <p class="main_label main_label_and_icon main_label_and_icon_2"><i class="fas fa-puzzle-piece"></i>Personal Projects</p>
                    <br>
                    <span class="separator"></span>
                    <div id="cont1">
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Q </span><br> Web engine [ https://search.eronelit.com ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Full PC info </span> <br> All information PC [ https://blog.eronelit.com/2016/11/eronel-full-pc-information.html ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Interaktivmarket </span> <br> Bussiness social network [ http://interaktivmarket.com ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit O/FTP</span> <br> Online FTP Client [ https://ftpo.eronelit.com/ ]</span></p>
                        <p id="info_email" class="info_email_code main_label_fffear  "><span><span class="main_label_fffear_FFFA" style="font-weight:bold;">Eronelit Web Q</span> <br> Web browser</span><br>
                            <span id="ffaefaer_F">AND MORE</span></p>



                    </div>

                </div>
                <div id="skills_div">
                    <p class="main_label main_label_and_icon main_label_and_icon_2 ksills_ff">Other important information</p>
                    <br>

                    <span class="separator"></span>
                    <div id="cont1">
                        <div id="sckills">
                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-code"></i> Programming :</span> <br>
                                <p class="icon_of_text">C#, javascript, HTML5, css3, asp.net,PHP, jQuery UI,VB, C++, SQL,...</p>
                            </p>


                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-cogs"></i> Game engines :</span> <br>
                                <p class="icon_of_text"> Unreal Engine, Unity, CryEngine, in-house game engine (based on C++, OpenGL, Bullet physics...)</p>
                            </p>

                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-address-book-libary"></i> Libraries :</span> <br>
                                <p class="icon_of_text"> Bullet and PhysX physics, OpenCV, QT, SDL2, Assimp, OpenGL legacy..</p>
                            </p>

                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-microscope"></i> Science : </span> <br>
                                <p class="icon_of_text"> Quantum (Quantum Theory, Wromhole,space,gravitational
                                    physics,robotic solutions in medicine, space, ...), Space explore,exploring the entire history of the
                                    planet Earth,... </p>
                            </p>

                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fab fa-android"></i> Platforms : </span> <br>
                                <p class="icon_of_text"> PC, Android, Oculus Rift VR, Google Cardboard, Microsoft Kinect, Linux(Debian,Ubundu), Embedded systems</p>
                            </p>
                            <p class="skill_row_coll">
                                <span class="inIcon_of_icon_icon_is_icon"><i class="fas fa-tools"></i> Skills : </span> <br>
                                <p class="icon_of_text"> Programming , design, behavioral trees, 3D modeling, gameplay design, particle system, Industry Simulation(PTC CREO)</p>
                            </p>



                        </div>
                    </div>
                </div>
                <div id="footer_cv">
                    <div id="round_top">
                        <div id="ff"></div>
                        <div id="ff2"></div>
                    </div>
                    <p>
                        <a></a> Copyright <a><i class="far fa-copyright"></i></a> 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | CV.
                    </p>
                    <div id="backgro_row"></div>
                </div>
            </div>
            <?php /* <div id="box_back" class="box2 box_div_id">
                <h1>Marko Nikolić</h1>
                <span class="separator"></span>
                 <img id="hrcod" src="./?mnps=source_9342805_generated_qr?<?php echo time(); ?>">
                <div id="cont1">
                    <p id="info_email"><i class="fas fa-map-marker-alt"></i> Serbia/Belgrade/Surčin</p>
                    <p id="info_email"><i class="fas fa-globe"></i> portfolio.eronelit.com</p>
                    <p id="info_email"><i class="fab fa-linkedin"></i> linkedin.com/in/marko-nikolic-49385a283</p>
                    <p id="info_email"><i class="fas fa-at"></i> marko.supergun@gmail.com</p>
                    <p></p>
                </div>
            </div>  *l/ ?>
            <br><br> <br>
            <?php /* 
      
        <span class="separator"></span>
        <div id="instructions">
            <p style="font-wheight:bold;">Instruction for print : </p>
            <p id="box_represantion"><span></span>Dimension 90 x 50 mm (or 85 x 55 mm)</p>
        </div>

        <div  style="width: 10px;height: 228px;position: absolute;"></div>
        */ ?>
        </div><?php /*
        <div class="copyrig">
            <p>
                <a><i class="far fa-copyright"></i></a> Copyright © 2014 - <?php echo date("Y"); ?> <a>Marko Nikolić</a> | Serbia/Belgrade.
            </p>
        </div>
        <div class="copyrig1" style="display:none !important;">
             
            <br>
            <button onclick="window.open('<?php echo $actual_link; ?>')"><i class="fas fa-external-link-alt"></i> ORIGINAL URL https://portfolio.eronelit.com/?pages=visitcard<br> Current time and date [ <?php echo date("d:m:Y |") . " <span id='clock'></span>" ?> ] </button>
        </div> *f/ ?>
        <p id="round_ffae" onclick="/*fonflicaer()/fr*r/window.print()"><i class="fas fa-file-pdf"></i></p>
  */ ?>
    </div>
    <?php /* <div id="alert" >
        <p><br>This page is protected by Eronelit Security <br> You do not have permission to print!
            <br>

            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIA0KICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIA0KICAgIDxwYXRoIGQ9Im02MCA5aC01NmMtMS42NTQgMC0zIDEuMzQ2LTMgM3Y0MGMwIDEuNjU0IDEuMzQ2IDMgMyAzaDU2YzEuNjU0IDAgMy0xLjM0NiAzLTN2LTQwYzAtMS42NTQtMS4zNDYtMy0zLTN6bS01NiAyaDU2Yy41NTIgMCAxIC40NDkgMSAxdjVoLTU4di01YzAtLjU1MS40NDgtMSAxLTF6bTU2IDQyaC01NmMtLjU1MiAwLTEtLjQ0OS0xLTF2LTMzaDU4djMzYzAgLjU1MS0uNDQ4IDEtMSAxem0tNDUtMzhoLTJ2LTJoMnptLTggMGgtMnYtMmgyem00IDBoLTJ2LTJoMnptNSA2Yy02LjA2NSAwLTExIDQuOTM1LTExIDExczQuOTM1IDExIDExIDExIDExLTQuOTM1IDExLTExLTQuOTM1LTExLTExLTExem0wIDJjNC45NjMgMCA5IDQuMDM4IDkgOSAwIDEuODU0LS41NjQgMy41NzktMS41MjkgNS4wMTItMS4wMTEtMS41MTQtMi40NDctMi42NjQtNC4xMDktMy4zMzcgMS0uOTE0IDEuNjM4LTIuMjE3IDEuNjM4LTMuNjc1IDAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1YzAgMS40NTguNjM4IDIuNzYxIDEuNjM4IDMuNjc2LTEuNjYxLjY3Mi0zLjA5OCAxLjgyMy00LjEwOSAzLjMzNy0uOTY1LTEuNDM0LTEuNTI5LTMuMTU5LTEuNTI5LTUuMDEzIDAtNC45NjIgNC4wMzctOSA5LTl6bS0zIDdjMC0xLjY1NCAxLjM0Ni0zIDMtM3MzIDEuMzQ2IDMgMy0xLjM0NiAzLTMgMy0zLTEuMzQ2LTMtM3ptLTMuMDk3IDguNjAxYzEuMjI4LTIuMjAxIDMuNTQ2LTMuNjAxIDYuMDk3LTMuNjAxczQuODY5IDEuNCA2LjA5NyAzLjYwMWMtMS42MDYgMS40ODQtMy43NDQgMi4zOTktNi4wOTcgMi4zOTlzLTQuNDkxLS45MTUtNi4wOTctMi4zOTl6bTEuMDk3IDYuMzk5aC00Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MmMwIDEuMTAzLjg5NyAyIDIgMmg0YzEuMTAzIDAgMi0uODk3IDItMnYtMmMwLTEuMTAzLS44OTctMi0yLTJ6bS00IDR2LTJoNGwuMDAxIDJ6bTE0LTRoLTRjLTEuMTAzIDAtMiAuODk3LTIgMnYyYzAgMS4xMDMuODk3IDIgMiAyaDRjMS4xMDMgMCAyLS44OTcgMi0ydi0yYzAtMS4xMDMtLjg5Ny0yLTItMnptLTQgNHYtMmg0bC4wMDEgMnptMTQtNGgtNGMtMS4xMDMgMC0yIC44OTctMiAydjJjMCAxLjEwMy44OTcgMiAyIDJoNGMxLjEwMyAwIDItLjg5NyAyLTJ2LTJjMC0xLjEwMy0uODk3LTItMi0yem0tNCA0di0yaDRsLjAwMSAyem0yNC0xMS44MTZ2LTMuMTg0YzAtMi43NTctMi4yNDMtNS01LTVzLTUgMi4yNDMtNSA1djMuMTg0Yy0xLjE2MS40MTQtMiAxLjUxNC0yIDIuODE2djhjMCAxLjY1NCAxLjM0NiAzIDMgM2g4YzEuNjU0IDAgMy0xLjM0NiAzLTN2LThjMC0xLjMwMi0uODM5LTIuNDAyLTItMi44MTZ6bS01LTYuMTg0YzEuNjU0IDAgMyAxLjM0NiAzIDN2M2gtNnYtM2MwLTEuNjU0IDEuMzQ2LTMgMy0zem01IDE3YzAgLjU1MS0uNDQ4IDEtMSAxaC04Yy0uNTUyIDAtMS0uNDQ5LTEtMXYtOGMwLS41NTEuNDQ4LTEgMS0xaDhjLjU1MiAwIDEgLjQ0OSAxIDF6bS01LThjLTEuNjU0IDAtMyAxLjM0Ni0zIDMgMCAxLjMwMi44MzkgMi40MDIgMiAyLjgxNnYyLjE4NGgydi0yLjE4NGMxLjE2MS0uNDE0IDItMS41MTQgMi0yLjgxNiAwLTEuNjU0LTEuMzQ2LTMtMy0zem0wIDRjLS41NTIgMC0xLS40NDktMS0xcy40NDgtMSAxLTEgMSAuNDQ5IDEgMS0uNDQ4IDEtMSAxem0tMTUtMTdoMjh2LTZoLTI4em0yLTRoMjR2MmgtMjR6bTI0IDE4aDJ2MmgtMnptMCA0aDJ2MmgtMnptMCA0aDJ2MmgtMnoiIGZpbGw9IiNmMDBhIi8+DQo8L3N2Zz4=" width="112">
        </p>
    </div> */ ?>
    <?php /*   <object data="./?pages=pdf-954385472" style="/h* display: block; *h/width: auto;height: auto;border:0px;position: fixed;left: 0px;right: 0px;bottom: 86px;top: 53px;">
        <embed id="F_slider_projcts" src="./?pages=pdf-954385472" style="width:100%;height:100%; border:0px;position: absolute;left: 0px;right: 0px;bottom: 0px;top: 50px;">
        Error: Embedded data could not be displayed.
    </object>
   
  
    <h2 class="toCanvas"> <a href="javascript:void(0);"> </a></h2>
    <h2 class="toPic"><a href="javascript:void(0);"></a></h2>


    <script type="text/javascript" src="./?pages=vc-js-1"></script>
    <script type="text/javascript" src="./?pages=vc-js-2"></script>
    <script type="text/javascript" src="./?pages=vc-js-3"></script>



    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>


    <canvas id="myCanvas"  ></canvas>

    <script type="text/javascript">
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');

        // draw a blue cloud
        context.beginPath();
        context.moveTo(170, 80);
        drawWindow(window, 0,0, 100, 200, "rgb(255,255,255)");
        context.stroke();

        function onflicaer() {
            // only jpeg is supported by jsPDF
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
        }
    </script>
*f/ ?>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
    <canvas id="viewport"></canvas>
    <style>
        canvas#viewport {
            border: 1px solid red;

            position: fixed;
            background: -webkit-linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef), -webkit-linear-gradient(45deg, #efefef 25%, #cecece 25%, #cecece 75%, #efefef 75%, #efefef);
            background-size: 21px 21px;
            vertical-align: middle;
            border: 0px;
            background-position: 0 0, 10px 10px;

        }
    </style>
    <script type="text/javascript">
        function onflicaer() {
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');

            base_image = new Image();
            base_image.src = '<?php echo "./?mnps=image-in-g-background-5"; ?>';
            context.drawImage(base_image, 0, 0);

            // only jpeg is supported by jsPDF
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save();

        }
    </script>*/ ?>

    <?php
    if (!empty($_GET['url_path'])) {
        $path = $_GET['url_path'];

        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

        /*   echo "<style> body {
        background-image: url('$base64');
         "; $fileSizeBytes = filesize($path);
 
        
        </style>"; */


        //In my case, the file was 269,708 bytes in size.
        var_dump(filesize($path));
    }
    /*    ?>



    <div style="
    margin-top: 40px;
    position: fixed;
">
        <a id="a-make" href="#">Make a screenshot</a>
        <a id="a-download" href="#" style="display:none;">Download a screenshot</a>
    </div>

    <div id="main">
        <div id="screenshot">
            ...
        </div>
    </div>
    <style>
        canvas {
            position: fixed;
            margin-top: 120px;
            border: 2px dashed;
        }
    </style>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>

    <script>
        function makeScreenshot() {
            html2canvas(document.getElementById("div_box_center"), {
                scale: 2
            }).then(canvas => {
                canvas.id = "canvasID";
                var main = document.getElementById("meta_div");
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(canvas);
                var canvas = document.getElementById('canvasID');

                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF();

                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            });
        }

        document.getElementById("a-make").addEventListener('click', function() {
            document.getElementById("a-make").style.display = "none";
            makeScreenshot();
            document.getElementById("a-download").style.display = "inline";
        }, false);

        document.getElementById("a-download").addEventListener('click', function() {
            this.href = document.getElementById("canvasID").toDataURL();
            this.download = "canvas-image.pdf";


        }, true);
    </script>



*/ ?>


    <script type="text/javascript" src="./?pages=vc-js-6?<?php echo time(); ?>"></script>
</body>

</html><?php

        /*

Trenutno postoji teorija u ERonelit JGA da 
je GENOM pod imenom F[4029582886] DNA/DNK urođeni kod koji je zaslužan 
i koji određuje kada je beba sprememna da se rodi. 
Samo nesvesni deo mozga majke može da ga čita. . .

Ova teroija je nastala kada sam apdejtovao verziju ya Deoploy jednog od mojih sistema koji su 
pisani DNA/DNK kodom . . .

*/
        ?>