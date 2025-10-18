export const Playground = {
  "abi": [
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "test_rivet_1",
      "inputs": [
        {
          "name": "a",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "b",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "c",
          "type": "tuple",
          "internalType": "struct Playground.Foo",
          "components": [
            {
              "name": "x",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "y",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "d",
          "type": "tuple[]",
          "internalType": "struct Playground.Foo[]",
          "components": [
            {
              "name": "x",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "y",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "success",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TestEventRivet1",
      "inputs": [
        {
          "name": "a",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "b",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        },
        {
          "name": "c",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "d",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b506105a6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063095ea7b31461003b578063bd0124991461006b575b600080fd5b610055600480360381019061005091906101e8565b61009b565b6040516100629190610243565b60405180910390f35b61008560048036038101906100809190610438565b6100f5565b6040516100929190610243565b60405180910390f35b60008273ffffffffffffffffffffffffffffffffffffffff167f90ec57f18fa7b15c6b8d5e4d1deb90796c74b2ff23d4d0cecad0cb42a96b3128836040516100e391906104ca565b60405180910390a26001905092915050565b60008260000151857faec1cb26522cfa7f986ea3c986cd2cd3876a44322e5322685750cf15246002cf8660405161012c9190610542565b60405180910390a360019050949350505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061017f82610154565b9050919050565b61018f81610174565b811461019a57600080fd5b50565b6000813590506101ac81610186565b92915050565b6000819050919050565b6101c5816101b2565b81146101d057600080fd5b50565b6000813590506101e2816101bc565b92915050565b600080604083850312156101ff576101fe61014a565b5b600061020d8582860161019d565b925050602061021e858286016101d3565b9150509250929050565b60008115159050919050565b61023d81610228565b82525050565b60006020820190506102586000830184610234565b92915050565b61026781610228565b811461027257600080fd5b50565b6000813590506102848161025e565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102d88261028f565b810181811067ffffffffffffffff821117156102f7576102f66102a0565b5b80604052505050565b600061030a610140565b905061031682826102cf565b919050565b6000604082840312156103315761033061028a565b5b61033b6040610300565b9050600061034b848285016101d3565b600083015250602061035f84828501610275565b60208301525092915050565b600080fd5b600067ffffffffffffffff82111561038b5761038a6102a0565b5b602082029050602081019050919050565b600080fd5b60006103b46103af84610370565b610300565b905080838252602082019050604084028301858111156103d7576103d661039c565b5b835b8181101561040057806103ec888261031b565b8452602084019350506040810190506103d9565b5050509392505050565b600082601f83011261041f5761041e61036b565b5b813561042f8482602086016103a1565b91505092915050565b60008060008060a085870312156104525761045161014a565b5b6000610460878288016101d3565b945050602061047187828801610275565b93505060406104828782880161031b565b925050608085013567ffffffffffffffff8111156104a3576104a261014f565b5b6104af8782880161040a565b91505092959194509250565b6104c4816101b2565b82525050565b60006020820190506104df60008301846104bb565b92915050565b600082825260208201905092915050565b7f7269766574000000000000000000000000000000000000000000000000000000600082015250565b600061052c6005836104e5565b9150610537826104f6565b602082019050919050565b60006040820190506105576000830184610234565b81810360208301526105688161051f565b90509291505056fea264697066735822122059c6724579fd389e12ac002c1b99d0f45b93380032e5d7407c881ff2bae0307364736f6c63430008120033",
    "sourceMap": "58:629:4:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063095ea7b31461003b578063bd0124991461006b575b600080fd5b610055600480360381019061005091906101e8565b61009b565b6040516100629190610243565b60405180910390f35b61008560048036038101906100809190610438565b6100f5565b6040516100929190610243565b60405180910390f35b60008273ffffffffffffffffffffffffffffffffffffffff167f90ec57f18fa7b15c6b8d5e4d1deb90796c74b2ff23d4d0cecad0cb42a96b3128836040516100e391906104ca565b60405180910390a26001905092915050565b60008260000151857faec1cb26522cfa7f986ea3c986cd2cd3876a44322e5322685750cf15246002cf8660405161012c9190610542565b60405180910390a360019050949350505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061017f82610154565b9050919050565b61018f81610174565b811461019a57600080fd5b50565b6000813590506101ac81610186565b92915050565b6000819050919050565b6101c5816101b2565b81146101d057600080fd5b50565b6000813590506101e2816101bc565b92915050565b600080604083850312156101ff576101fe61014a565b5b600061020d8582860161019d565b925050602061021e858286016101d3565b9150509250929050565b60008115159050919050565b61023d81610228565b82525050565b60006020820190506102586000830184610234565b92915050565b61026781610228565b811461027257600080fd5b50565b6000813590506102848161025e565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102d88261028f565b810181811067ffffffffffffffff821117156102f7576102f66102a0565b5b80604052505050565b600061030a610140565b905061031682826102cf565b919050565b6000604082840312156103315761033061028a565b5b61033b6040610300565b9050600061034b848285016101d3565b600083015250602061035f84828501610275565b60208301525092915050565b600080fd5b600067ffffffffffffffff82111561038b5761038a6102a0565b5b602082029050602081019050919050565b600080fd5b60006103b46103af84610370565b610300565b905080838252602082019050604084028301858111156103d7576103d661039c565b5b835b8181101561040057806103ec888261031b565b8452602084019350506040810190506103d9565b5050509392505050565b600082601f83011261041f5761041e61036b565b5b813561042f8482602086016103a1565b91505092915050565b60008060008060a085870312156104525761045161014a565b5b6000610460878288016101d3565b945050602061047187828801610275565b93505060406104828782880161031b565b925050608085013567ffffffffffffffff8111156104a3576104a261014f565b5b6104af8782880161040a565b91505092959194509250565b6104c4816101b2565b82525050565b60006020820190506104df60008301846104bb565b92915050565b600082825260208201905092915050565b7f7269766574000000000000000000000000000000000000000000000000000000600082015250565b600061052c6005836104e5565b9150610537826104f6565b602082019050919050565b60006040820190506105576000830184610234565b81810360208301526105688161051f565b90509291505056fea264697066735822122059c6724579fd389e12ac002c1b99d0f45b93380032e5d7407c881ff2bae0307364736f6c63430008120033",
    "sourceMap": "58:629:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;546:139;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;323:217;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;546:139;612:4;641:7;633:24;;;650:6;633:24;;;;;;:::i;:::-;;;;;;;;674:4;667:11;;546:139;;;;:::o;323:217::-;448:12;508:1;:3;;;493:1;477:35;496:1;477:35;;;;;;:::i;:::-;;;;;;;;529:4;522:11;;323:217;;;;;;:::o;7:75:5:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:77::-;878:7;907:5;896:16;;841:77;;;:::o;924:122::-;997:24;1015:5;997:24;:::i;:::-;990:5;987:35;977:63;;1036:1;1033;1026:12;977:63;924:122;:::o;1052:139::-;1098:5;1136:6;1123:20;1114:29;;1152:33;1179:5;1152:33;:::i;:::-;1052:139;;;;:::o;1197:474::-;1265:6;1273;1322:2;1310:9;1301:7;1297:23;1293:32;1290:119;;;1328:79;;:::i;:::-;1290:119;1448:1;1473:53;1518:7;1509:6;1498:9;1494:22;1473:53;:::i;:::-;1463:63;;1419:117;1575:2;1601:53;1646:7;1637:6;1626:9;1622:22;1601:53;:::i;:::-;1591:63;;1546:118;1197:474;;;;;:::o;1677:90::-;1711:7;1754:5;1747:13;1740:21;1729:32;;1677:90;;;:::o;1773:109::-;1854:21;1869:5;1854:21;:::i;:::-;1849:3;1842:34;1773:109;;:::o;1888:210::-;1975:4;2013:2;2002:9;1998:18;1990:26;;2026:65;2088:1;2077:9;2073:17;2064:6;2026:65;:::i;:::-;1888:210;;;;:::o;2104:116::-;2174:21;2189:5;2174:21;:::i;:::-;2167:5;2164:32;2154:60;;2210:1;2207;2200:12;2154:60;2104:116;:::o;2226:133::-;2269:5;2307:6;2294:20;2285:29;;2323:30;2347:5;2323:30;:::i;:::-;2226:133;;;;:::o;2365:117::-;2474:1;2471;2464:12;2488:102;2529:6;2580:2;2576:7;2571:2;2564:5;2560:14;2556:28;2546:38;;2488:102;;;:::o;2596:180::-;2644:77;2641:1;2634:88;2741:4;2738:1;2731:15;2765:4;2762:1;2755:15;2782:281;2865:27;2887:4;2865:27;:::i;:::-;2857:6;2853:40;2995:6;2983:10;2980:22;2959:18;2947:10;2944:34;2941:62;2938:88;;;3006:18;;:::i;:::-;2938:88;3046:10;3042:2;3035:22;2825:238;2782:281;;:::o;3069:129::-;3103:6;3130:20;;:::i;:::-;3120:30;;3159:33;3187:4;3179:6;3159:33;:::i;:::-;3069:129;;;:::o;3356:561::-;3426:5;3470:4;3458:9;3453:3;3449:19;3445:30;3442:117;;;3478:79;;:::i;:::-;3442:117;3577:21;3593:4;3577:21;:::i;:::-;3568:30;;3654:1;3694:49;3739:3;3730:6;3719:9;3715:22;3694:49;:::i;:::-;3687:4;3680:5;3676:16;3669:75;3608:147;3811:2;3852:46;3894:3;3885:6;3874:9;3870:22;3852:46;:::i;:::-;3845:4;3838:5;3834:16;3827:72;3765:145;3356:561;;;;:::o;3923:117::-;4032:1;4029;4022:12;4046:332;4144:4;4234:18;4226:6;4223:30;4220:56;;;4256:18;;:::i;:::-;4220:56;4306:4;4298:6;4294:17;4286:25;;4366:4;4360;4356:15;4348:23;;4046:332;;;:::o;4384:117::-;4493:1;4490;4483:12;4538:773;4655:5;4680:102;4696:85;4774:6;4696:85;:::i;:::-;4680:102;:::i;:::-;4671:111;;4802:5;4831:6;4824:5;4817:21;4865:4;4858:5;4854:16;4847:23;;4918:4;4910:6;4906:17;4898:6;4894:30;4947:3;4939:6;4936:15;4933:122;;;4966:79;;:::i;:::-;4933:122;5081:6;5064:241;5098:6;5093:3;5090:15;5064:241;;;5173:3;5202:58;5256:3;5244:10;5202:58;:::i;:::-;5197:3;5190:71;5290:4;5285:3;5281:14;5274:21;;5140:165;5124:4;5119:3;5115:14;5108:21;;5064:241;;;5068:21;4661:650;;4538:773;;;;;:::o;5348:412::-;5440:5;5489:3;5482:4;5474:6;5470:17;5466:27;5456:122;;5497:79;;:::i;:::-;5456:122;5614:6;5601:20;5639:115;5750:3;5742:6;5735:4;5727:6;5723:17;5639:115;:::i;:::-;5630:124;;5446:314;5348:412;;;;:::o;5766:1054::-;5916:6;5924;5932;5940;5989:3;5977:9;5968:7;5964:23;5960:33;5957:120;;;5996:79;;:::i;:::-;5957:120;6116:1;6141:53;6186:7;6177:6;6166:9;6162:22;6141:53;:::i;:::-;6131:63;;6087:117;6243:2;6269:50;6311:7;6302:6;6291:9;6287:22;6269:50;:::i;:::-;6259:60;;6214:115;6368:2;6394:74;6460:7;6451:6;6440:9;6436:22;6394:74;:::i;:::-;6384:84;;6339:139;6545:3;6534:9;6530:19;6517:33;6577:18;6569:6;6566:30;6563:117;;;6599:79;;:::i;:::-;6563:117;6704:99;6795:7;6786:6;6775:9;6771:22;6704:99;:::i;:::-;6694:109;;6488:325;5766:1054;;;;;;;:::o;6826:118::-;6913:24;6931:5;6913:24;:::i;:::-;6908:3;6901:37;6826:118;;:::o;6950:222::-;7043:4;7081:2;7070:9;7066:18;7058:26;;7094:71;7162:1;7151:9;7147:17;7138:6;7094:71;:::i;:::-;6950:222;;;;:::o;7178:169::-;7262:11;7296:6;7291:3;7284:19;7336:4;7331:3;7327:14;7312:29;;7178:169;;;;:::o;7353:155::-;7493:7;7489:1;7481:6;7477:14;7470:31;7353:155;:::o;7514:365::-;7656:3;7677:66;7741:1;7736:3;7677:66;:::i;:::-;7670:73;;7752:93;7841:3;7752:93;:::i;:::-;7870:2;7865:3;7861:12;7854:19;;7514:365;;;:::o;7885:517::-;8073:4;8111:2;8100:9;8096:18;8088:26;;8124:65;8186:1;8175:9;8171:17;8162:6;8124:65;:::i;:::-;8236:9;8230:4;8226:20;8221:2;8210:9;8206:18;8199:48;8264:131;8390:4;8264:131;:::i;:::-;8256:139;;7885:517;;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "approve(address,uint256)": "095ea7b3",
    "test_rivet_1(uint256,bool,(uint256,bool),(uint256,bool)[])": "bd012499"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approve\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"b\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"c\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"TestEventRivet1\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"b\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"y\",\"type\":\"bool\"}],\"internalType\":\"struct Playground.Foo\",\"name\":\"c\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"y\",\"type\":\"bool\"}],\"internalType\":\"struct Playground.Foo[]\",\"name\":\"d\",\"type\":\"tuple[]\"}],\"name\":\"test_rivet_1\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Playground.sol\":\"Playground\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"src/Playground.sol\":{\"keccak256\":\"0xebc8038a813b72b624e1ae2dd47c572c50dd37b252cc690941cdbc103d38d7b1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3338801e10132de4e9904a2cb69f4c756eb9892108a9b660314bbf1395a6faf\",\"dweb:/ipfs/QmUTMdwLjnUaHVTJSYkDAyjNEJafTWv9iML488Q6uyvfuB\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approve",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "a",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "b",
              "type": "bool",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "c",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "d",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "TestEventRivet1",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "a",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "b",
              "type": "bool"
            },
            {
              "internalType": "struct Playground.Foo",
              "name": "c",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "x",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "y",
                  "type": "bool"
                }
              ]
            },
            {
              "internalType": "struct Playground.Foo[]",
              "name": "d",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "x",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "y",
                  "type": "bool"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_rivet_1",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/Playground.sol": "Playground"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "src/Playground.sol": {
        "keccak256": "0xebc8038a813b72b624e1ae2dd47c572c50dd37b252cc690941cdbc103d38d7b1",
        "urls": [
          "bzz-raw://b3338801e10132de4e9904a2cb69f4c756eb9892108a9b660314bbf1395a6faf",
          "dweb:/ipfs/QmUTMdwLjnUaHVTJSYkDAyjNEJafTWv9iML488Q6uyvfuB"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 4
} as const;

export const ERC721TokenReceiver = {
  "abi": [
    {
      "type": "function",
      "name": "onERC721Received",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "onERC721Received(address,address,uint256,bytes)": "150b7a02"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC721.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A generic interface for a contract which properly accepts ERC721 tokens.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"../../node_modules/solmate/src/tokens/ERC721.sol\":\"ERC721TokenReceiver\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"../../node_modules/solmate/src/tokens/ERC721.sol\":{\"keccak256\":\"0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403\",\"dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "../../node_modules/solmate/src/tokens/ERC721.sol": "ERC721TokenReceiver"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "../../node_modules/solmate/src/tokens/ERC721.sol": {
        "keccak256": "0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d",
        "urls": [
          "bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403",
          "dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "id": 1
} as const;

export const ERC20 = {
  "abi": [
    {
      "type": "function",
      "name": "DOMAIN_SEPARATOR",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nonces",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "permit",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "v",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\",\"details\":\"Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern and gas efficient ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"../../node_modules/solmate/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"../../node_modules/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permit"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "../../node_modules/solmate/src/tokens/ERC20.sol": "ERC20"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "../../node_modules/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "id": 0
} as const;

export const ERC721 = {
  "abi": [
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "getApproved(uint256)": "081812fc",
    "isApprovedForAll(address,address)": "e985e9c5",
    "name()": "06fdde03",
    "ownerOf(uint256)": "6352211e",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC721.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern, minimalist, and gas efficient ERC-721 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"../../node_modules/solmate/src/tokens/ERC721.sol\":\"ERC721\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"../../node_modules/solmate/src/tokens/ERC721.sol\":{\"keccak256\":\"0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403\",\"dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "../../node_modules/solmate/src/tokens/ERC721.sol": "ERC721"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "../../node_modules/solmate/src/tokens/ERC721.sol": {
        "keccak256": "0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d",
        "urls": [
          "bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403",
          "dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "id": 1
} as const;

export const MockERC721 = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_symbol",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeMint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeMint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060405162002861380380620028618339818101604052810190620000379190620001fa565b818181600090816200004a9190620004ca565b5080600190816200005c9190620004ca565b5050505050620005b1565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d08262000085565b810181811067ffffffffffffffff82111715620000f257620000f162000096565b5b80604052505050565b60006200010762000067565b9050620001158282620000c5565b919050565b600067ffffffffffffffff82111562000138576200013762000096565b5b620001438262000085565b9050602081019050919050565b60005b838110156200017057808201518184015260208101905062000153565b60008484015250505050565b6000620001936200018d846200011a565b620000fb565b905082815260208101848484011115620001b257620001b162000080565b5b620001bf84828562000150565b509392505050565b600082601f830112620001df57620001de6200007b565b5b8151620001f18482602086016200017c565b91505092915050565b6000806040838503121562000214576200021362000071565b5b600083015167ffffffffffffffff81111562000235576200023462000076565b5b6200024385828601620001c7565b925050602083015167ffffffffffffffff81111562000267576200026662000076565b5b6200027585828601620001c7565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d257607f821691505b602082108103620002e857620002e76200028a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000313565b6200035e868362000313565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003ab620003a56200039f8462000376565b62000380565b62000376565b9050919050565b6000819050919050565b620003c7836200038a565b620003df620003d682620003b2565b84845462000320565b825550505050565b600090565b620003f6620003e7565b62000403818484620003bc565b505050565b5b818110156200042b576200041f600082620003ec565b60018101905062000409565b5050565b601f8211156200047a576200044481620002ee565b6200044f8462000303565b810160208510156200045f578190505b620004776200046e8562000303565b83018262000408565b50505b505050565b600082821c905092915050565b60006200049f600019846008026200047f565b1980831691505092915050565b6000620004ba83836200048c565b9150826002028217905092915050565b620004d5826200027f565b67ffffffffffffffff811115620004f157620004f062000096565b5b620004fd8254620002b9565b6200050a8282856200042f565b600060209050601f8311600181146200054257600084156200052d578287015190505b620005398582620004ac565b865550620005a9565b601f1984166200055286620002ee565b60005b828110156200057c5784890151825560018201915060208501945060208101905062000555565b868310156200059c578489015162000598601f8916826200048c565b8355505b6001600288020188555050505b505050505050565b6122a080620005c16000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636352211e116100a2578063a144819411610071578063a1448194146102b4578063a22cb465146102d0578063b88d4fde146102ec578063c87b56dd14610308578063e985e9c5146103385761010b565b80636352211e1461021a57806370a082311461024a5780638832e6e31461027a57806395d89b41146102965761010b565b806323b872dd116100de57806323b872dd146101aa57806340c10f19146101c657806342842e0e146101e257806342966c68146101fe5761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611726565b610368565b604051610137919061176e565b60405180910390f35b6101486103fa565b6040516101559190611819565b60405180910390f35b61017860048036038101906101739190611871565b610488565b60405161018591906118df565b60405180910390f35b6101a860048036038101906101a39190611926565b6104bb565b005b6101c460048036038101906101bf9190611966565b6106a4565b005b6101e060048036038101906101db9190611926565b610aa3565b005b6101fc60048036038101906101f79190611966565b610ab1565b005b61021860048036038101906102139190611871565b610be9565b005b610234600480360381019061022f9190611871565b610bf5565b60405161024191906118df565b60405180910390f35b610264600480360381019061025f91906119b9565b610ca0565b60405161027191906119f5565b60405180910390f35b610294600480360381019061028f9190611b45565b610d57565b005b61029e610d67565b6040516102ab9190611819565b60405180910390f35b6102ce60048036038101906102c99190611926565b610df5565b005b6102ea60048036038101906102e59190611be0565b610e03565b005b61030660048036038101906103019190611c80565b610f00565b005b610322600480360381019061031d9190611871565b61103e565b60405161032f9190611819565b60405180910390f35b610352600480360381019061034d9190611d08565b611045565b60405161035f919061176e565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c357506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f35750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000805461040790611d77565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611d77565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b505050505081565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105b35750600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e990611df4565b60405180910390fd5b826004600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6002600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073c90611e60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab90611ecc565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108745750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b806108dd57506004600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091390611df4565b60405180910390fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b610aad8282611074565b5050565b610abc8383836106a4565b60008273ffffffffffffffffffffffffffffffffffffffff163b1480610ba5575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b8152600401610b4193929190611f23565b6020604051808303816000875af1158015610b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b849190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb90611ffb565b60405180910390fd5b505050565b610bf281611286565b50565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff1603610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9290612067565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d07906120d3565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610d62838383611449565b505050565b60018054610d7490611d77565b80601f0160208091040260200160405190810160405280929190818152602001828054610da090611d77565b8015610ded5780601f10610dc257610100808354040283529160200191610ded565b820191906000526020600020905b815481529060010190602001808311610dd057829003601f168201915b505050505081565b610dff8282611583565b5050565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ef4919061176e565b60405180910390a35050565b610f0b8585856106a4565b60008473ffffffffffffffffffffffffffffffffffffffff163b1480610ff8575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a0233888787876040518663ffffffff1660e01b8152600401610f94959493929190612120565b6020604051808303816000875af1158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd79190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e90611ffb565b60405180910390fd5b5050505050565b6060919050565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110da90611ecc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c906121ba565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361132d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132490612067565b60405180910390fd5b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001900391905055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6114538383611074565b60008373ffffffffffffffffffffffffffffffffffffffff163b148061153f575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff1663150b7a0233600086866040518563ffffffff1660e01b81526004016114db949392919061221e565b6020604051808303816000875af11580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e9190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b61157e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157590611ffb565b60405180910390fd5b505050565b61158d8282611074565b60008273ffffffffffffffffffffffffffffffffffffffff163b1480611677575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a02336000856040518463ffffffff1660e01b815260040161161393929190611f23565b6020604051808303816000875af1158015611632573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116569190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b6116b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ad90611ffb565b60405180910390fd5b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611703816116ce565b811461170e57600080fd5b50565b600081359050611720816116fa565b92915050565b60006020828403121561173c5761173b6116c4565b5b600061174a84828501611711565b91505092915050565b60008115159050919050565b61176881611753565b82525050565b6000602082019050611783600083018461175f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117c35780820151818401526020810190506117a8565b60008484015250505050565b6000601f19601f8301169050919050565b60006117eb82611789565b6117f58185611794565b93506118058185602086016117a5565b61180e816117cf565b840191505092915050565b6000602082019050818103600083015261183381846117e0565b905092915050565b6000819050919050565b61184e8161183b565b811461185957600080fd5b50565b60008135905061186b81611845565b92915050565b600060208284031215611887576118866116c4565b5b60006118958482850161185c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118c98261189e565b9050919050565b6118d9816118be565b82525050565b60006020820190506118f460008301846118d0565b92915050565b611903816118be565b811461190e57600080fd5b50565b600081359050611920816118fa565b92915050565b6000806040838503121561193d5761193c6116c4565b5b600061194b85828601611911565b925050602061195c8582860161185c565b9150509250929050565b60008060006060848603121561197f5761197e6116c4565b5b600061198d86828701611911565b935050602061199e86828701611911565b92505060406119af8682870161185c565b9150509250925092565b6000602082840312156119cf576119ce6116c4565b5b60006119dd84828501611911565b91505092915050565b6119ef8161183b565b82525050565b6000602082019050611a0a60008301846119e6565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a52826117cf565b810181811067ffffffffffffffff82111715611a7157611a70611a1a565b5b80604052505050565b6000611a846116ba565b9050611a908282611a49565b919050565b600067ffffffffffffffff821115611ab057611aaf611a1a565b5b611ab9826117cf565b9050602081019050919050565b82818337600083830152505050565b6000611ae8611ae384611a95565b611a7a565b905082815260208101848484011115611b0457611b03611a15565b5b611b0f848285611ac6565b509392505050565b600082601f830112611b2c57611b2b611a10565b5b8135611b3c848260208601611ad5565b91505092915050565b600080600060608486031215611b5e57611b5d6116c4565b5b6000611b6c86828701611911565b9350506020611b7d8682870161185c565b925050604084013567ffffffffffffffff811115611b9e57611b9d6116c9565b5b611baa86828701611b17565b9150509250925092565b611bbd81611753565b8114611bc857600080fd5b50565b600081359050611bda81611bb4565b92915050565b60008060408385031215611bf757611bf66116c4565b5b6000611c0585828601611911565b9250506020611c1685828601611bcb565b9150509250929050565b600080fd5b600080fd5b60008083601f840112611c4057611c3f611a10565b5b8235905067ffffffffffffffff811115611c5d57611c5c611c20565b5b602083019150836001820283011115611c7957611c78611c25565b5b9250929050565b600080600080600060808688031215611c9c57611c9b6116c4565b5b6000611caa88828901611911565b9550506020611cbb88828901611911565b9450506040611ccc8882890161185c565b935050606086013567ffffffffffffffff811115611ced57611cec6116c9565b5b611cf988828901611c2a565b92509250509295509295909350565b60008060408385031215611d1f57611d1e6116c4565b5b6000611d2d85828601611911565b9250506020611d3e85828601611911565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d8f57607f821691505b602082108103611da257611da1611d48565b5b50919050565b7f4e4f545f415554484f52495a4544000000000000000000000000000000000000600082015250565b6000611dde600e83611794565b9150611de982611da8565b602082019050919050565b60006020820190508181036000830152611e0d81611dd1565b9050919050565b7f57524f4e475f46524f4d00000000000000000000000000000000000000000000600082015250565b6000611e4a600a83611794565b9150611e5582611e14565b602082019050919050565b60006020820190508181036000830152611e7981611e3d565b9050919050565b7f494e56414c49445f524543495049454e54000000000000000000000000000000600082015250565b6000611eb6601183611794565b9150611ec182611e80565b602082019050919050565b60006020820190508181036000830152611ee581611ea9565b9050919050565b600082825260208201905092915050565b50565b6000611f0d600083611eec565b9150611f1882611efd565b600082019050919050565b6000608082019050611f3860008301866118d0565b611f4560208301856118d0565b611f5260408301846119e6565b8181036060830152611f6381611f00565b9050949350505050565b600081519050611f7c816116fa565b92915050565b600060208284031215611f9857611f976116c4565b5b6000611fa684828501611f6d565b91505092915050565b7f554e534146455f524543495049454e5400000000000000000000000000000000600082015250565b6000611fe5601083611794565b9150611ff082611faf565b602082019050919050565b6000602082019050818103600083015261201481611fd8565b9050919050565b7f4e4f545f4d494e54454400000000000000000000000000000000000000000000600082015250565b6000612051600a83611794565b915061205c8261201b565b602082019050919050565b6000602082019050818103600083015261208081612044565b9050919050565b7f5a45524f5f414444524553530000000000000000000000000000000000000000600082015250565b60006120bd600c83611794565b91506120c882612087565b602082019050919050565b600060208201905081810360008301526120ec816120b0565b9050919050565b60006120ff8385611eec565b935061210c838584611ac6565b612115836117cf565b840190509392505050565b600060808201905061213560008301886118d0565b61214260208301876118d0565b61214f60408301866119e6565b81810360608301526121628184866120f3565b90509695505050505050565b7f414c52454144595f4d494e544544000000000000000000000000000000000000600082015250565b60006121a4600e83611794565b91506121af8261216e565b602082019050919050565b600060208201905081810360008301526121d381612197565b9050919050565b600081519050919050565b60006121f0826121da565b6121fa8185611eec565b935061220a8185602086016117a5565b612213816117cf565b840191505092915050565b600060808201905061223360008301876118d0565b61224060208301866118d0565b61224d60408301856119e6565b818103606083015261225f81846121e5565b90509594505050505056fea264697066735822122027b9fa03fd2a27e41b1722e20595424956b814464701d4221f4fea220f896ec964736f6c63430008120033",
    "sourceMap": "113:694:3:-:0;;;149:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;234:5;241:7;2227:5:1;2220:4;:12;;;;;;:::i;:::-;;2251:7;2242:6;:16;;;;;;:::i;:::-;;2154:111;;149:103:3;;113:694;;7:75:5;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:246::-;1691:1;1701:113;1715:6;1712:1;1709:13;1701:113;;;1800:1;1795:3;1791:11;1785:18;1781:1;1776:3;1772:11;1765:39;1737:2;1734:1;1730:10;1725:15;;1701:113;;;1848:1;1839:6;1834:3;1830:16;1823:27;1672:184;1610:246;;;:::o;1862:434::-;1951:5;1976:66;1992:49;2034:6;1992:49;:::i;:::-;1976:66;:::i;:::-;1967:75;;2065:6;2058:5;2051:21;2103:4;2096:5;2092:16;2141:3;2132:6;2127:3;2123:16;2120:25;2117:112;;;2148:79;;:::i;:::-;2117:112;2238:52;2283:6;2278:3;2273;2238:52;:::i;:::-;1957:339;1862:434;;;;;:::o;2316:355::-;2383:5;2432:3;2425:4;2417:6;2413:17;2409:27;2399:122;;2440:79;;:::i;:::-;2399:122;2550:6;2544:13;2575:90;2661:3;2653:6;2646:4;2638:6;2634:17;2575:90;:::i;:::-;2566:99;;2389:282;2316:355;;;;:::o;2677:853::-;2776:6;2784;2833:2;2821:9;2812:7;2808:23;2804:32;2801:119;;;2839:79;;:::i;:::-;2801:119;2980:1;2969:9;2965:17;2959:24;3010:18;3002:6;2999:30;2996:117;;;3032:79;;:::i;:::-;2996:117;3137:74;3203:7;3194:6;3183:9;3179:22;3137:74;:::i;:::-;3127:84;;2930:291;3281:2;3270:9;3266:18;3260:25;3312:18;3304:6;3301:30;3298:117;;;3334:79;;:::i;:::-;3298:117;3439:74;3505:7;3496:6;3485:9;3481:22;3439:74;:::i;:::-;3429:84;;3231:292;2677:853;;;;;:::o;3536:99::-;3588:6;3622:5;3616:12;3606:22;;3536:99;;;:::o;3641:180::-;3689:77;3686:1;3679:88;3786:4;3783:1;3776:15;3810:4;3807:1;3800:15;3827:320;3871:6;3908:1;3902:4;3898:12;3888:22;;3955:1;3949:4;3945:12;3976:18;3966:81;;4032:4;4024:6;4020:17;4010:27;;3966:81;4094:2;4086:6;4083:14;4063:18;4060:38;4057:84;;4113:18;;:::i;:::-;4057:84;3878:269;3827:320;;;:::o;4153:141::-;4202:4;4225:3;4217:11;;4248:3;4245:1;4238:14;4282:4;4279:1;4269:18;4261:26;;4153:141;;;:::o;4300:93::-;4337:6;4384:2;4379;4372:5;4368:14;4364:23;4354:33;;4300:93;;;:::o;4399:107::-;4443:8;4493:5;4487:4;4483:16;4462:37;;4399:107;;;;:::o;4512:393::-;4581:6;4631:1;4619:10;4615:18;4654:97;4684:66;4673:9;4654:97;:::i;:::-;4772:39;4802:8;4791:9;4772:39;:::i;:::-;4760:51;;4844:4;4840:9;4833:5;4829:21;4820:30;;4893:4;4883:8;4879:19;4872:5;4869:30;4859:40;;4588:317;;4512:393;;;;;:::o;4911:77::-;4948:7;4977:5;4966:16;;4911:77;;;:::o;4994:60::-;5022:3;5043:5;5036:12;;4994:60;;;:::o;5060:142::-;5110:9;5143:53;5161:34;5170:24;5188:5;5170:24;:::i;:::-;5161:34;:::i;:::-;5143:53;:::i;:::-;5130:66;;5060:142;;;:::o;5208:75::-;5251:3;5272:5;5265:12;;5208:75;;;:::o;5289:269::-;5399:39;5430:7;5399:39;:::i;:::-;5460:91;5509:41;5533:16;5509:41;:::i;:::-;5501:6;5494:4;5488:11;5460:91;:::i;:::-;5454:4;5447:105;5365:193;5289:269;;;:::o;5564:73::-;5609:3;5564:73;:::o;5643:189::-;5720:32;;:::i;:::-;5761:65;5819:6;5811;5805:4;5761:65;:::i;:::-;5696:136;5643:189;;:::o;5838:186::-;5898:120;5915:3;5908:5;5905:14;5898:120;;;5969:39;6006:1;5999:5;5969:39;:::i;:::-;5942:1;5935:5;5931:13;5922:22;;5898:120;;;5838:186;;:::o;6030:543::-;6131:2;6126:3;6123:11;6120:446;;;6165:38;6197:5;6165:38;:::i;:::-;6249:29;6267:10;6249:29;:::i;:::-;6239:8;6235:44;6432:2;6420:10;6417:18;6414:49;;;6453:8;6438:23;;6414:49;6476:80;6532:22;6550:3;6532:22;:::i;:::-;6522:8;6518:37;6505:11;6476:80;:::i;:::-;6135:431;;6120:446;6030:543;;;:::o;6579:117::-;6633:8;6683:5;6677:4;6673:16;6652:37;;6579:117;;;;:::o;6702:169::-;6746:6;6779:51;6827:1;6823:6;6815:5;6812:1;6808:13;6779:51;:::i;:::-;6775:56;6860:4;6854;6850:15;6840:25;;6753:118;6702:169;;;;:::o;6876:295::-;6952:4;7098:29;7123:3;7117:4;7098:29;:::i;:::-;7090:37;;7160:3;7157:1;7153:11;7147:4;7144:21;7136:29;;6876:295;;;;:::o;7176:1395::-;7293:37;7326:3;7293:37;:::i;:::-;7395:18;7387:6;7384:30;7381:56;;;7417:18;;:::i;:::-;7381:56;7461:38;7493:4;7487:11;7461:38;:::i;:::-;7546:67;7606:6;7598;7592:4;7546:67;:::i;:::-;7640:1;7664:4;7651:17;;7696:2;7688:6;7685:14;7713:1;7708:618;;;;8370:1;8387:6;8384:77;;;8436:9;8431:3;8427:19;8421:26;8412:35;;8384:77;8487:67;8547:6;8540:5;8487:67;:::i;:::-;8481:4;8474:81;8343:222;7678:887;;7708:618;7760:4;7756:9;7748:6;7744:22;7794:37;7826:4;7794:37;:::i;:::-;7853:1;7867:208;7881:7;7878:1;7875:14;7867:208;;;7960:9;7955:3;7951:19;7945:26;7937:6;7930:42;8011:1;8003:6;7999:14;7989:24;;8058:2;8047:9;8043:18;8030:31;;7904:4;7901:1;7897:12;7892:17;;7867:208;;;8103:6;8094:7;8091:19;8088:179;;;8161:9;8156:3;8152:19;8146:26;8204:48;8246:4;8238:6;8234:17;8223:9;8204:48;:::i;:::-;8196:6;8189:64;8111:156;8088:179;8313:1;8309;8301:6;8297:14;8293:22;8287:4;8280:36;7715:611;;;7678:887;;7268:1303;;;7176:1395;;:::o;113:694:3:-;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061010b5760003560e01c80636352211e116100a2578063a144819411610071578063a1448194146102b4578063a22cb465146102d0578063b88d4fde146102ec578063c87b56dd14610308578063e985e9c5146103385761010b565b80636352211e1461021a57806370a082311461024a5780638832e6e31461027a57806395d89b41146102965761010b565b806323b872dd116100de57806323b872dd146101aa57806340c10f19146101c657806342842e0e146101e257806342966c68146101fe5761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611726565b610368565b604051610137919061176e565b60405180910390f35b6101486103fa565b6040516101559190611819565b60405180910390f35b61017860048036038101906101739190611871565b610488565b60405161018591906118df565b60405180910390f35b6101a860048036038101906101a39190611926565b6104bb565b005b6101c460048036038101906101bf9190611966565b6106a4565b005b6101e060048036038101906101db9190611926565b610aa3565b005b6101fc60048036038101906101f79190611966565b610ab1565b005b61021860048036038101906102139190611871565b610be9565b005b610234600480360381019061022f9190611871565b610bf5565b60405161024191906118df565b60405180910390f35b610264600480360381019061025f91906119b9565b610ca0565b60405161027191906119f5565b60405180910390f35b610294600480360381019061028f9190611b45565b610d57565b005b61029e610d67565b6040516102ab9190611819565b60405180910390f35b6102ce60048036038101906102c99190611926565b610df5565b005b6102ea60048036038101906102e59190611be0565b610e03565b005b61030660048036038101906103019190611c80565b610f00565b005b610322600480360381019061031d9190611871565b61103e565b60405161032f9190611819565b60405180910390f35b610352600480360381019061034d9190611d08565b611045565b60405161035f919061176e565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c357506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f35750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000805461040790611d77565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611d77565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b505050505081565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105b35750600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e990611df4565b60405180910390fd5b826004600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6002600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073c90611e60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab90611ecc565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108745750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b806108dd57506004600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091390611df4565b60405180910390fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b610aad8282611074565b5050565b610abc8383836106a4565b60008273ffffffffffffffffffffffffffffffffffffffff163b1480610ba5575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b8152600401610b4193929190611f23565b6020604051808303816000875af1158015610b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b849190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb90611ffb565b60405180910390fd5b505050565b610bf281611286565b50565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff1603610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9290612067565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d07906120d3565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610d62838383611449565b505050565b60018054610d7490611d77565b80601f0160208091040260200160405190810160405280929190818152602001828054610da090611d77565b8015610ded5780601f10610dc257610100808354040283529160200191610ded565b820191906000526020600020905b815481529060010190602001808311610dd057829003601f168201915b505050505081565b610dff8282611583565b5050565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ef4919061176e565b60405180910390a35050565b610f0b8585856106a4565b60008473ffffffffffffffffffffffffffffffffffffffff163b1480610ff8575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a0233888787876040518663ffffffff1660e01b8152600401610f94959493929190612120565b6020604051808303816000875af1158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd79190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e90611ffb565b60405180910390fd5b5050505050565b6060919050565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110da90611ecc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c906121ba565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361132d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132490612067565b60405180910390fd5b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001900391905055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6114538383611074565b60008373ffffffffffffffffffffffffffffffffffffffff163b148061153f575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff1663150b7a0233600086866040518563ffffffff1660e01b81526004016114db949392919061221e565b6020604051808303816000875af11580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e9190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b61157e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157590611ffb565b60405180910390fd5b505050565b61158d8282611074565b60008273ffffffffffffffffffffffffffffffffffffffff163b1480611677575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a02336000856040518463ffffffff1660e01b815260040161161393929190611f23565b6020604051808303816000875af1158015611632573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116569190611f82565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b6116b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ad90611ffb565b60405180910390fd5b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611703816116ce565b811461170e57600080fd5b50565b600081359050611720816116fa565b92915050565b60006020828403121561173c5761173b6116c4565b5b600061174a84828501611711565b91505092915050565b60008115159050919050565b61176881611753565b82525050565b6000602082019050611783600083018461175f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156117c35780820151818401526020810190506117a8565b60008484015250505050565b6000601f19601f8301169050919050565b60006117eb82611789565b6117f58185611794565b93506118058185602086016117a5565b61180e816117cf565b840191505092915050565b6000602082019050818103600083015261183381846117e0565b905092915050565b6000819050919050565b61184e8161183b565b811461185957600080fd5b50565b60008135905061186b81611845565b92915050565b600060208284031215611887576118866116c4565b5b60006118958482850161185c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118c98261189e565b9050919050565b6118d9816118be565b82525050565b60006020820190506118f460008301846118d0565b92915050565b611903816118be565b811461190e57600080fd5b50565b600081359050611920816118fa565b92915050565b6000806040838503121561193d5761193c6116c4565b5b600061194b85828601611911565b925050602061195c8582860161185c565b9150509250929050565b60008060006060848603121561197f5761197e6116c4565b5b600061198d86828701611911565b935050602061199e86828701611911565b92505060406119af8682870161185c565b9150509250925092565b6000602082840312156119cf576119ce6116c4565b5b60006119dd84828501611911565b91505092915050565b6119ef8161183b565b82525050565b6000602082019050611a0a60008301846119e6565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a52826117cf565b810181811067ffffffffffffffff82111715611a7157611a70611a1a565b5b80604052505050565b6000611a846116ba565b9050611a908282611a49565b919050565b600067ffffffffffffffff821115611ab057611aaf611a1a565b5b611ab9826117cf565b9050602081019050919050565b82818337600083830152505050565b6000611ae8611ae384611a95565b611a7a565b905082815260208101848484011115611b0457611b03611a15565b5b611b0f848285611ac6565b509392505050565b600082601f830112611b2c57611b2b611a10565b5b8135611b3c848260208601611ad5565b91505092915050565b600080600060608486031215611b5e57611b5d6116c4565b5b6000611b6c86828701611911565b9350506020611b7d8682870161185c565b925050604084013567ffffffffffffffff811115611b9e57611b9d6116c9565b5b611baa86828701611b17565b9150509250925092565b611bbd81611753565b8114611bc857600080fd5b50565b600081359050611bda81611bb4565b92915050565b60008060408385031215611bf757611bf66116c4565b5b6000611c0585828601611911565b9250506020611c1685828601611bcb565b9150509250929050565b600080fd5b600080fd5b60008083601f840112611c4057611c3f611a10565b5b8235905067ffffffffffffffff811115611c5d57611c5c611c20565b5b602083019150836001820283011115611c7957611c78611c25565b5b9250929050565b600080600080600060808688031215611c9c57611c9b6116c4565b5b6000611caa88828901611911565b9550506020611cbb88828901611911565b9450506040611ccc8882890161185c565b935050606086013567ffffffffffffffff811115611ced57611cec6116c9565b5b611cf988828901611c2a565b92509250509295509295909350565b60008060408385031215611d1f57611d1e6116c4565b5b6000611d2d85828601611911565b9250506020611d3e85828601611911565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d8f57607f821691505b602082108103611da257611da1611d48565b5b50919050565b7f4e4f545f415554484f52495a4544000000000000000000000000000000000000600082015250565b6000611dde600e83611794565b9150611de982611da8565b602082019050919050565b60006020820190508181036000830152611e0d81611dd1565b9050919050565b7f57524f4e475f46524f4d00000000000000000000000000000000000000000000600082015250565b6000611e4a600a83611794565b9150611e5582611e14565b602082019050919050565b60006020820190508181036000830152611e7981611e3d565b9050919050565b7f494e56414c49445f524543495049454e54000000000000000000000000000000600082015250565b6000611eb6601183611794565b9150611ec182611e80565b602082019050919050565b60006020820190508181036000830152611ee581611ea9565b9050919050565b600082825260208201905092915050565b50565b6000611f0d600083611eec565b9150611f1882611efd565b600082019050919050565b6000608082019050611f3860008301866118d0565b611f4560208301856118d0565b611f5260408301846119e6565b8181036060830152611f6381611f00565b9050949350505050565b600081519050611f7c816116fa565b92915050565b600060208284031215611f9857611f976116c4565b5b6000611fa684828501611f6d565b91505092915050565b7f554e534146455f524543495049454e5400000000000000000000000000000000600082015250565b6000611fe5601083611794565b9150611ff082611faf565b602082019050919050565b6000602082019050818103600083015261201481611fd8565b9050919050565b7f4e4f545f4d494e54454400000000000000000000000000000000000000000000600082015250565b6000612051600a83611794565b915061205c8261201b565b602082019050919050565b6000602082019050818103600083015261208081612044565b9050919050565b7f5a45524f5f414444524553530000000000000000000000000000000000000000600082015250565b60006120bd600c83611794565b91506120c882612087565b602082019050919050565b600060208201905081810360008301526120ec816120b0565b9050919050565b60006120ff8385611eec565b935061210c838584611ac6565b612115836117cf565b840190509392505050565b600060808201905061213560008301886118d0565b61214260208301876118d0565b61214f60408301866119e6565b81810360608301526121628184866120f3565b90509695505050505050565b7f414c52454144595f4d494e544544000000000000000000000000000000000000600082015250565b60006121a4600e83611794565b91506121af8261216e565b602082019050919050565b600060208201905081810360008301526121d381612197565b9050919050565b600081519050919050565b60006121f0826121da565b6121fa8185611eec565b935061220a8185602086016117a5565b612213816117cf565b840191505092915050565b600060808201905061223360008301876118d0565b61224060208301866118d0565b61224d60408301856119e6565b818103606083015261225f81846121e5565b90509594505050505056fea264697066735822122027b9fa03fd2a27e41b1722e20595424956b814464701d4221f4fea220f896ec964736f6c63430008120033",
    "sourceMap": "113:694:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4714:335:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;899:18;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1844:46;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2453:282;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2950:741;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;360:93:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3697:396:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;459:77:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1327:149:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1482:168;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;649:156:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;924:20:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;542:101:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2741:203:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4099:427;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;258:96:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1897:68:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4714:335;4790:4;4840:10;4825:25;;:11;:25;;;;:100;;;;4915:10;4900:25;;:11;:25;;;;4825:100;:175;;;;4990:10;4975:25;;:11;:25;;;;4825:175;4806:194;;4714:335;;;:::o;899:18::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1844:46::-;;;;;;;;;;;;;;;;;;;;;;:::o;2453:282::-;2524:13;2540:8;:12;2549:2;2540:12;;;;;;;;;;;;;;;;;;;;;2524:28;;2585:5;2571:19;;:10;:19;;;:58;;;;2594:16;:23;2611:5;2594:23;;;;;;;;;;;;;;;:35;2618:10;2594:35;;;;;;;;;;;;;;;;;;;;;;;;;2571:58;2563:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;2677:7;2659:11;:15;2671:2;2659:15;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;2725:2;2716:7;2700:28;;2709:5;2700:28;;;;;;;;;;;;2514:221;2453:282;;:::o;2950:741::-;3081:8;:12;3090:2;3081:12;;;;;;;;;;;;;;;;;;;;;3073:20;;:4;:20;;;3065:43;;;;;;;;;;;;:::i;:::-;;;;;;;;;3141:1;3127:16;;:2;:16;;;3119:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;3211:4;3197:18;;:10;:18;;;:56;;;;3219:16;:22;3236:4;3219:22;;;;;;;;;;;;;;;:34;3242:10;3219:34;;;;;;;;;;;;;;;;;;;;;;;;;3197:56;:89;;;;3271:11;:15;3283:2;3271:15;;;;;;;;;;;;;;;;;;;;;3257:29;;:10;:29;;;3197:89;3176:150;;;;;;;;;;;;:::i;:::-;;;;;;;;;3526:10;:16;3537:4;3526:16;;;;;;;;;;;;;;;;:18;;;;;;;;;;;;;;3559:10;:14;3570:2;3559:14;;;;;;;;;;;;;;;;:16;;;;;;;;;;;;;3611:2;3596:8;:12;3605:2;3596:12;;;;;;;;;;;;:17;;;;;;;;;;;;;;;;;;3631:11;:15;3643:2;3631:15;;;;;;;;;;;;3624:22;;;;;;;;;;;3681:2;3677;3662:22;;3671:4;3662:22;;;;;;;;;;;;2950:741;;;:::o;360:93:3:-;428:18;434:2;438:7;428:5;:18::i;:::-;360:93;;:::o;3697:396:1:-;3816:26;3829:4;3835:2;3839;3816:12;:26::i;:::-;3892:1;3874:2;:14;;;:19;:170;;;;3999:45;;;3913:131;;;3933:2;3913:40;;;3954:10;3966:4;3972:2;3913:66;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:131;;;;3874:170;3853:233;;;;;;;;;;;;:::i;:::-;;;;;;;;;3697:396;;;:::o;459:77:3:-;515:14;521:7;515:5;:14::i;:::-;459:77;:::o;1327:149:1:-;1385:13;1452:1;1418:36;;1427:8;:12;1436:2;1427:12;;;;;;;;;;;;;;;;;;;;;1419:20;;;1418:36;;;1410:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;1327:149;;;:::o;1482:168::-;1545:7;1589:1;1572:19;;:5;:19;;;1564:44;;;;;;;;;;;;:::i;:::-;;;;;;;;;1626:10;:17;1637:5;1626:17;;;;;;;;;;;;;;;;1619:24;;1482:168;;;:::o;649:156:3:-;770:28;780:2;784:7;793:4;770:9;:28::i;:::-;649:156;;;:::o;924:20:1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;542:101:3:-;614:22;624:2;628:7;614:9;:22::i;:::-;542:101;;:::o;2741:203:1:-;2867:8;2826:16;:28;2843:10;2826:28;;;;;;;;;;;;;;;:38;2855:8;2826:38;;;;;;;;;;;;;;;;:49;;;;;;;;;;;;;;;;;;2918:8;2891:46;;2906:10;2891:46;;;2928:8;2891:46;;;;;;:::i;:::-;;;;;;;;2741:203;;:::o;4099:427::-;4247:26;4260:4;4266:2;4270;4247:12;:26::i;:::-;4323:1;4305:2;:14;;;:19;:172;;;;4432:45;;;4344:133;;;4364:2;4344:40;;;4385:10;4397:4;4403:2;4407:4;;4344:68;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:133;;;;4305:172;4284:235;;;;;;;;;;;;:::i;:::-;;;;;;;;;4099:427;;;;;:::o;258:96:3:-;337:13;258:96;;;:::o;1897:68:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5243:371::-;5331:1;5317:16;;:2;:16;;;5309:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;5398:1;5374:26;;:8;:12;5383:2;5374:12;;;;;;;;;;;;;;;;;;;;;:26;;;5366:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;5509:10;:14;5520:2;5509:14;;;;;;;;;;;;;;;;:16;;;;;;;;;;;;;5561:2;5546:8;:12;5555:2;5546:12;;;;;;;;;;;;:17;;;;;;;;;;;;;;;;;;5604:2;5600;5579:28;;5596:1;5579:28;;;;;;;;;;;;5243:371;;:::o;5620:::-;5674:13;5690:8;:12;5699:2;5690:12;;;;;;;;;;;;;;;;;;;;;5674:28;;5738:1;5721:19;;:5;:19;;;5713:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;5845:10;:17;5856:5;5845:17;;;;;;;;;;;;;;;;:19;;;;;;;;;;;;;;5892:8;:12;5901:2;5892:12;;;;;;;;;;;;5885:19;;;;;;;;;;;5922:11;:15;5934:2;5922:15;;;;;;;;;;;;5915:22;;;;;;;;;;;5981:2;5977:1;5953:31;;5962:5;5953:31;;;;;;;;;;;;5664:327;5620:371;:::o;6531:391::-;6650:13;6656:2;6660;6650:5;:13::i;:::-;6713:1;6695:2;:14;;;:19;:178;;;;6828:45;;;6734:139;;;6754:2;6734:40;;;6775:10;6795:1;6799:2;6803:4;6734:74;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:139;;;;6695:178;6674:241;;;;;;;;;;;;:::i;:::-;;;;;;;;;6531:391;;;:::o;6185:340::-;6255:13;6261:2;6265;6255:5;:13::i;:::-;6318:1;6300:2;:14;;;:19;:176;;;;6431:45;;;6339:137;;;6359:2;6339:40;;;6380:10;6400:1;6404:2;6339:72;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:137;;;;6300:176;6279:239;;;;;;;;;;;;:::i;:::-;;;;;;;;;6185:340;;:::o;7:75:5:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:246::-;1879:1;1889:113;1903:6;1900:1;1897:13;1889:113;;;1988:1;1983:3;1979:11;1973:18;1969:1;1964:3;1960:11;1953:39;1925:2;1922:1;1918:10;1913:15;;1889:113;;;2036:1;2027:6;2022:3;2018:16;2011:27;1860:184;1798:246;;;:::o;2050:102::-;2091:6;2142:2;2138:7;2133:2;2126:5;2122:14;2118:28;2108:38;;2050:102;;;:::o;2158:377::-;2246:3;2274:39;2307:5;2274:39;:::i;:::-;2329:71;2393:6;2388:3;2329:71;:::i;:::-;2322:78;;2409:65;2467:6;2462:3;2455:4;2448:5;2444:16;2409:65;:::i;:::-;2499:29;2521:6;2499:29;:::i;:::-;2494:3;2490:39;2483:46;;2250:285;2158:377;;;;:::o;2541:313::-;2654:4;2692:2;2681:9;2677:18;2669:26;;2741:9;2735:4;2731:20;2727:1;2716:9;2712:17;2705:47;2769:78;2842:4;2833:6;2769:78;:::i;:::-;2761:86;;2541:313;;;;:::o;2860:77::-;2897:7;2926:5;2915:16;;2860:77;;;:::o;2943:122::-;3016:24;3034:5;3016:24;:::i;:::-;3009:5;3006:35;2996:63;;3055:1;3052;3045:12;2996:63;2943:122;:::o;3071:139::-;3117:5;3155:6;3142:20;3133:29;;3171:33;3198:5;3171:33;:::i;:::-;3071:139;;;;:::o;3216:329::-;3275:6;3324:2;3312:9;3303:7;3299:23;3295:32;3292:119;;;3330:79;;:::i;:::-;3292:119;3450:1;3475:53;3520:7;3511:6;3500:9;3496:22;3475:53;:::i;:::-;3465:63;;3421:117;3216:329;;;;:::o;3551:126::-;3588:7;3628:42;3621:5;3617:54;3606:65;;3551:126;;;:::o;3683:96::-;3720:7;3749:24;3767:5;3749:24;:::i;:::-;3738:35;;3683:96;;;:::o;3785:118::-;3872:24;3890:5;3872:24;:::i;:::-;3867:3;3860:37;3785:118;;:::o;3909:222::-;4002:4;4040:2;4029:9;4025:18;4017:26;;4053:71;4121:1;4110:9;4106:17;4097:6;4053:71;:::i;:::-;3909:222;;;;:::o;4137:122::-;4210:24;4228:5;4210:24;:::i;:::-;4203:5;4200:35;4190:63;;4249:1;4246;4239:12;4190:63;4137:122;:::o;4265:139::-;4311:5;4349:6;4336:20;4327:29;;4365:33;4392:5;4365:33;:::i;:::-;4265:139;;;;:::o;4410:474::-;4478:6;4486;4535:2;4523:9;4514:7;4510:23;4506:32;4503:119;;;4541:79;;:::i;:::-;4503:119;4661:1;4686:53;4731:7;4722:6;4711:9;4707:22;4686:53;:::i;:::-;4676:63;;4632:117;4788:2;4814:53;4859:7;4850:6;4839:9;4835:22;4814:53;:::i;:::-;4804:63;;4759:118;4410:474;;;;;:::o;4890:619::-;4967:6;4975;4983;5032:2;5020:9;5011:7;5007:23;5003:32;5000:119;;;5038:79;;:::i;:::-;5000:119;5158:1;5183:53;5228:7;5219:6;5208:9;5204:22;5183:53;:::i;:::-;5173:63;;5129:117;5285:2;5311:53;5356:7;5347:6;5336:9;5332:22;5311:53;:::i;:::-;5301:63;;5256:118;5413:2;5439:53;5484:7;5475:6;5464:9;5460:22;5439:53;:::i;:::-;5429:63;;5384:118;4890:619;;;;;:::o;5515:329::-;5574:6;5623:2;5611:9;5602:7;5598:23;5594:32;5591:119;;;5629:79;;:::i;:::-;5591:119;5749:1;5774:53;5819:7;5810:6;5799:9;5795:22;5774:53;:::i;:::-;5764:63;;5720:117;5515:329;;;;:::o;5850:118::-;5937:24;5955:5;5937:24;:::i;:::-;5932:3;5925:37;5850:118;;:::o;5974:222::-;6067:4;6105:2;6094:9;6090:18;6082:26;;6118:71;6186:1;6175:9;6171:17;6162:6;6118:71;:::i;:::-;5974:222;;;;:::o;6202:117::-;6311:1;6308;6301:12;6325:117;6434:1;6431;6424:12;6448:180;6496:77;6493:1;6486:88;6593:4;6590:1;6583:15;6617:4;6614:1;6607:15;6634:281;6717:27;6739:4;6717:27;:::i;:::-;6709:6;6705:40;6847:6;6835:10;6832:22;6811:18;6799:10;6796:34;6793:62;6790:88;;;6858:18;;:::i;:::-;6790:88;6898:10;6894:2;6887:22;6677:238;6634:281;;:::o;6921:129::-;6955:6;6982:20;;:::i;:::-;6972:30;;7011:33;7039:4;7031:6;7011:33;:::i;:::-;6921:129;;;:::o;7056:307::-;7117:4;7207:18;7199:6;7196:30;7193:56;;;7229:18;;:::i;:::-;7193:56;7267:29;7289:6;7267:29;:::i;:::-;7259:37;;7351:4;7345;7341:15;7333:23;;7056:307;;;:::o;7369:146::-;7466:6;7461:3;7456;7443:30;7507:1;7498:6;7493:3;7489:16;7482:27;7369:146;;;:::o;7521:423::-;7598:5;7623:65;7639:48;7680:6;7639:48;:::i;:::-;7623:65;:::i;:::-;7614:74;;7711:6;7704:5;7697:21;7749:4;7742:5;7738:16;7787:3;7778:6;7773:3;7769:16;7766:25;7763:112;;;7794:79;;:::i;:::-;7763:112;7884:54;7931:6;7926:3;7921;7884:54;:::i;:::-;7604:340;7521:423;;;;;:::o;7963:338::-;8018:5;8067:3;8060:4;8052:6;8048:17;8044:27;8034:122;;8075:79;;:::i;:::-;8034:122;8192:6;8179:20;8217:78;8291:3;8283:6;8276:4;8268:6;8264:17;8217:78;:::i;:::-;8208:87;;8024:277;7963:338;;;;:::o;8307:797::-;8393:6;8401;8409;8458:2;8446:9;8437:7;8433:23;8429:32;8426:119;;;8464:79;;:::i;:::-;8426:119;8584:1;8609:53;8654:7;8645:6;8634:9;8630:22;8609:53;:::i;:::-;8599:63;;8555:117;8711:2;8737:53;8782:7;8773:6;8762:9;8758:22;8737:53;:::i;:::-;8727:63;;8682:118;8867:2;8856:9;8852:18;8839:32;8898:18;8890:6;8887:30;8884:117;;;8920:79;;:::i;:::-;8884:117;9025:62;9079:7;9070:6;9059:9;9055:22;9025:62;:::i;:::-;9015:72;;8810:287;8307:797;;;;;:::o;9110:116::-;9180:21;9195:5;9180:21;:::i;:::-;9173:5;9170:32;9160:60;;9216:1;9213;9206:12;9160:60;9110:116;:::o;9232:133::-;9275:5;9313:6;9300:20;9291:29;;9329:30;9353:5;9329:30;:::i;:::-;9232:133;;;;:::o;9371:468::-;9436:6;9444;9493:2;9481:9;9472:7;9468:23;9464:32;9461:119;;;9499:79;;:::i;:::-;9461:119;9619:1;9644:53;9689:7;9680:6;9669:9;9665:22;9644:53;:::i;:::-;9634:63;;9590:117;9746:2;9772:50;9814:7;9805:6;9794:9;9790:22;9772:50;:::i;:::-;9762:60;;9717:115;9371:468;;;;;:::o;9845:117::-;9954:1;9951;9944:12;9968:117;10077:1;10074;10067:12;10104:552;10161:8;10171:6;10221:3;10214:4;10206:6;10202:17;10198:27;10188:122;;10229:79;;:::i;:::-;10188:122;10342:6;10329:20;10319:30;;10372:18;10364:6;10361:30;10358:117;;;10394:79;;:::i;:::-;10358:117;10508:4;10500:6;10496:17;10484:29;;10562:3;10554:4;10546:6;10542:17;10532:8;10528:32;10525:41;10522:128;;;10569:79;;:::i;:::-;10522:128;10104:552;;;;;:::o;10662:963::-;10759:6;10767;10775;10783;10791;10840:3;10828:9;10819:7;10815:23;10811:33;10808:120;;;10847:79;;:::i;:::-;10808:120;10967:1;10992:53;11037:7;11028:6;11017:9;11013:22;10992:53;:::i;:::-;10982:63;;10938:117;11094:2;11120:53;11165:7;11156:6;11145:9;11141:22;11120:53;:::i;:::-;11110:63;;11065:118;11222:2;11248:53;11293:7;11284:6;11273:9;11269:22;11248:53;:::i;:::-;11238:63;;11193:118;11378:2;11367:9;11363:18;11350:32;11409:18;11401:6;11398:30;11395:117;;;11431:79;;:::i;:::-;11395:117;11544:64;11600:7;11591:6;11580:9;11576:22;11544:64;:::i;:::-;11526:82;;;;11321:297;10662:963;;;;;;;;:::o;11631:474::-;11699:6;11707;11756:2;11744:9;11735:7;11731:23;11727:32;11724:119;;;11762:79;;:::i;:::-;11724:119;11882:1;11907:53;11952:7;11943:6;11932:9;11928:22;11907:53;:::i;:::-;11897:63;;11853:117;12009:2;12035:53;12080:7;12071:6;12060:9;12056:22;12035:53;:::i;:::-;12025:63;;11980:118;11631:474;;;;;:::o;12111:180::-;12159:77;12156:1;12149:88;12256:4;12253:1;12246:15;12280:4;12277:1;12270:15;12297:320;12341:6;12378:1;12372:4;12368:12;12358:22;;12425:1;12419:4;12415:12;12446:18;12436:81;;12502:4;12494:6;12490:17;12480:27;;12436:81;12564:2;12556:6;12553:14;12533:18;12530:38;12527:84;;12583:18;;:::i;:::-;12527:84;12348:269;12297:320;;;:::o;12623:164::-;12763:16;12759:1;12751:6;12747:14;12740:40;12623:164;:::o;12793:366::-;12935:3;12956:67;13020:2;13015:3;12956:67;:::i;:::-;12949:74;;13032:93;13121:3;13032:93;:::i;:::-;13150:2;13145:3;13141:12;13134:19;;12793:366;;;:::o;13165:419::-;13331:4;13369:2;13358:9;13354:18;13346:26;;13418:9;13412:4;13408:20;13404:1;13393:9;13389:17;13382:47;13446:131;13572:4;13446:131;:::i;:::-;13438:139;;13165:419;;;:::o;13590:160::-;13730:12;13726:1;13718:6;13714:14;13707:36;13590:160;:::o;13756:366::-;13898:3;13919:67;13983:2;13978:3;13919:67;:::i;:::-;13912:74;;13995:93;14084:3;13995:93;:::i;:::-;14113:2;14108:3;14104:12;14097:19;;13756:366;;;:::o;14128:419::-;14294:4;14332:2;14321:9;14317:18;14309:26;;14381:9;14375:4;14371:20;14367:1;14356:9;14352:17;14345:47;14409:131;14535:4;14409:131;:::i;:::-;14401:139;;14128:419;;;:::o;14553:167::-;14693:19;14689:1;14681:6;14677:14;14670:43;14553:167;:::o;14726:366::-;14868:3;14889:67;14953:2;14948:3;14889:67;:::i;:::-;14882:74;;14965:93;15054:3;14965:93;:::i;:::-;15083:2;15078:3;15074:12;15067:19;;14726:366;;;:::o;15098:419::-;15264:4;15302:2;15291:9;15287:18;15279:26;;15351:9;15345:4;15341:20;15337:1;15326:9;15322:17;15315:47;15379:131;15505:4;15379:131;:::i;:::-;15371:139;;15098:419;;;:::o;15523:168::-;15606:11;15640:6;15635:3;15628:19;15680:4;15675:3;15671:14;15656:29;;15523:168;;;;:::o;15697:114::-;;:::o;15817:362::-;15958:3;15979:65;16042:1;16037:3;15979:65;:::i;:::-;15972:72;;16053:93;16142:3;16053:93;:::i;:::-;16171:1;16166:3;16162:11;16155:18;;15817:362;;;:::o;16185:748::-;16434:4;16472:3;16461:9;16457:19;16449:27;;16486:71;16554:1;16543:9;16539:17;16530:6;16486:71;:::i;:::-;16567:72;16635:2;16624:9;16620:18;16611:6;16567:72;:::i;:::-;16649;16717:2;16706:9;16702:18;16693:6;16649:72;:::i;:::-;16768:9;16762:4;16758:20;16753:2;16742:9;16738:18;16731:48;16796:130;16921:4;16796:130;:::i;:::-;16788:138;;16185:748;;;;;;:::o;16939:141::-;16995:5;17026:6;17020:13;17011:22;;17042:32;17068:5;17042:32;:::i;:::-;16939:141;;;;:::o;17086:349::-;17155:6;17204:2;17192:9;17183:7;17179:23;17175:32;17172:119;;;17210:79;;:::i;:::-;17172:119;17330:1;17355:63;17410:7;17401:6;17390:9;17386:22;17355:63;:::i;:::-;17345:73;;17301:127;17086:349;;;;:::o;17441:166::-;17581:18;17577:1;17569:6;17565:14;17558:42;17441:166;:::o;17613:366::-;17755:3;17776:67;17840:2;17835:3;17776:67;:::i;:::-;17769:74;;17852:93;17941:3;17852:93;:::i;:::-;17970:2;17965:3;17961:12;17954:19;;17613:366;;;:::o;17985:419::-;18151:4;18189:2;18178:9;18174:18;18166:26;;18238:9;18232:4;18228:20;18224:1;18213:9;18209:17;18202:47;18266:131;18392:4;18266:131;:::i;:::-;18258:139;;17985:419;;;:::o;18410:160::-;18550:12;18546:1;18538:6;18534:14;18527:36;18410:160;:::o;18576:366::-;18718:3;18739:67;18803:2;18798:3;18739:67;:::i;:::-;18732:74;;18815:93;18904:3;18815:93;:::i;:::-;18933:2;18928:3;18924:12;18917:19;;18576:366;;;:::o;18948:419::-;19114:4;19152:2;19141:9;19137:18;19129:26;;19201:9;19195:4;19191:20;19187:1;19176:9;19172:17;19165:47;19229:131;19355:4;19229:131;:::i;:::-;19221:139;;18948:419;;;:::o;19373:162::-;19513:14;19509:1;19501:6;19497:14;19490:38;19373:162;:::o;19541:366::-;19683:3;19704:67;19768:2;19763:3;19704:67;:::i;:::-;19697:74;;19780:93;19869:3;19780:93;:::i;:::-;19898:2;19893:3;19889:12;19882:19;;19541:366;;;:::o;19913:419::-;20079:4;20117:2;20106:9;20102:18;20094:26;;20166:9;20160:4;20156:20;20152:1;20141:9;20137:17;20130:47;20194:131;20320:4;20194:131;:::i;:::-;20186:139;;19913:419;;;:::o;20360:314::-;20456:3;20477:70;20540:6;20535:3;20477:70;:::i;:::-;20470:77;;20557:56;20606:6;20601:3;20594:5;20557:56;:::i;:::-;20638:29;20660:6;20638:29;:::i;:::-;20633:3;20629:39;20622:46;;20360:314;;;;;:::o;20680:660::-;20885:4;20923:3;20912:9;20908:19;20900:27;;20937:71;21005:1;20994:9;20990:17;20981:6;20937:71;:::i;:::-;21018:72;21086:2;21075:9;21071:18;21062:6;21018:72;:::i;:::-;21100;21168:2;21157:9;21153:18;21144:6;21100:72;:::i;:::-;21219:9;21213:4;21209:20;21204:2;21193:9;21189:18;21182:48;21247:86;21328:4;21319:6;21311;21247:86;:::i;:::-;21239:94;;20680:660;;;;;;;;:::o;21346:164::-;21486:16;21482:1;21474:6;21470:14;21463:40;21346:164;:::o;21516:366::-;21658:3;21679:67;21743:2;21738:3;21679:67;:::i;:::-;21672:74;;21755:93;21844:3;21755:93;:::i;:::-;21873:2;21868:3;21864:12;21857:19;;21516:366;;;:::o;21888:419::-;22054:4;22092:2;22081:9;22077:18;22069:26;;22141:9;22135:4;22131:20;22127:1;22116:9;22112:17;22105:47;22169:131;22295:4;22169:131;:::i;:::-;22161:139;;21888:419;;;:::o;22313:98::-;22364:6;22398:5;22392:12;22382:22;;22313:98;;;:::o;22417:373::-;22503:3;22531:38;22563:5;22531:38;:::i;:::-;22585:70;22648:6;22643:3;22585:70;:::i;:::-;22578:77;;22664:65;22722:6;22717:3;22710:4;22703:5;22699:16;22664:65;:::i;:::-;22754:29;22776:6;22754:29;:::i;:::-;22749:3;22745:39;22738:46;;22507:283;22417:373;;;;:::o;22796:640::-;22991:4;23029:3;23018:9;23014:19;23006:27;;23043:71;23111:1;23100:9;23096:17;23087:6;23043:71;:::i;:::-;23124:72;23192:2;23181:9;23177:18;23168:6;23124:72;:::i;:::-;23206;23274:2;23263:9;23259:18;23250:6;23206:72;:::i;:::-;23325:9;23319:4;23315:20;23310:2;23299:9;23295:18;23288:48;23353:76;23424:4;23415:6;23353:76;:::i;:::-;23345:84;;22796:640;;;;;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(uint256)": "42966c68",
    "getApproved(uint256)": "081812fc",
    "isApprovedForAll(address,address)": "e985e9c5",
    "mint(address,uint256)": "40c10f19",
    "name()": "06fdde03",
    "ownerOf(uint256)": "6352211e",
    "safeMint(address,uint256)": "a1448194",
    "safeMint(address,uint256,bytes)": "8832e6e3",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MockERC721.sol\":\"MockERC721\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"../../node_modules/solmate/src/tokens/ERC721.sol\":{\"keccak256\":\"0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403\",\"dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK\"]},\"src/MockERC721.sol\":{\"keccak256\":\"0x634bbce82039ce64e3a32afc3b8f226c4caf295c206bc5ec416c18e10193ed7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2d17f5919af27a640919802df99852910d5633bc9d45483c27f31452d1408ac8\",\"dweb:/ipfs/QmUSJSFh7D15U2kQU1i138cmRMVQkoVCTRvpkjXUr42GfH\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burn"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeMint"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeMint"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/MockERC721.sol": "MockERC721"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "../../node_modules/solmate/src/tokens/ERC721.sol": {
        "keccak256": "0x04af19f16f00ba65ae168d6d10da5210dc18da6bcec6974dccf984ba388aa22d",
        "urls": [
          "bzz-raw://098e69f22b67da6927e03203c12ebfda5b0490518f6d9cce7853001ac5ad8403",
          "dweb:/ipfs/QmYyzfurQe88PsVjRNfutV3gS7Vi68f7zgtVZVtLfd4ViK"
        ],
        "license": "AGPL-3.0-only"
      },
      "src/MockERC721.sol": {
        "keccak256": "0x634bbce82039ce64e3a32afc3b8f226c4caf295c206bc5ec416c18e10193ed7b",
        "urls": [
          "bzz-raw://2d17f5919af27a640919802df99852910d5633bc9d45483c27f31452d1408ac8",
          "dweb:/ipfs/QmUSJSFh7D15U2kQU1i138cmRMVQkoVCTRvpkjXUr42GfH"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 3
} as const;

export const MockERC20 = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_symbol",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_decimals",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "DOMAIN_SEPARATOR",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nonces",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "permit",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "v",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ],
  "bytecode": {
    "object": "0x60e06040523480156200001157600080fd5b5060405162001f9238038062001f928339818101604052810190620000379190620002f8565b82828282600090816200004b9190620005dd565b5081600190816200005d9190620005dd565b508060ff1660808160ff16815250504660a08181525050620000846200009760201b60201c565b60c081815250505050505050506200085a565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000cb919062000773565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc646306040516020016200010c959493929190620007fd565b60405160208183030381529060405280519060200120905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001908262000145565b810181811067ffffffffffffffff82111715620001b257620001b162000156565b5b80604052505050565b6000620001c762000127565b9050620001d5828262000185565b919050565b600067ffffffffffffffff821115620001f857620001f762000156565b5b620002038262000145565b9050602081019050919050565b60005b838110156200023057808201518184015260208101905062000213565b60008484015250505050565b6000620002536200024d84620001da565b620001bb565b90508281526020810184848401111562000272576200027162000140565b5b6200027f84828562000210565b509392505050565b600082601f8301126200029f576200029e6200013b565b5b8151620002b18482602086016200023c565b91505092915050565b600060ff82169050919050565b620002d281620002ba565b8114620002de57600080fd5b50565b600081519050620002f281620002c7565b92915050565b60008060006060848603121562000314576200031362000131565b5b600084015167ffffffffffffffff81111562000335576200033462000136565b5b620003438682870162000287565b935050602084015167ffffffffffffffff81111562000367576200036662000136565b5b620003758682870162000287565b92505060406200038886828701620002e1565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e557607f821691505b602082108103620003fb57620003fa6200039d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000426565b62000471868362000426565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004be620004b8620004b28462000489565b62000493565b62000489565b9050919050565b6000819050919050565b620004da836200049d565b620004f2620004e982620004c5565b84845462000433565b825550505050565b600090565b62000509620004fa565b62000516818484620004cf565b505050565b5b818110156200053e5762000532600082620004ff565b6001810190506200051c565b5050565b601f8211156200058d57620005578162000401565b620005628462000416565b8101602085101562000572578190505b6200058a620005818562000416565b8301826200051b565b50505b505050565b600082821c905092915050565b6000620005b26000198460080262000592565b1980831691505092915050565b6000620005cd83836200059f565b9150826002028217905092915050565b620005e88262000392565b67ffffffffffffffff81111562000604576200060362000156565b5b620006108254620003cc565b6200061d82828562000542565b600060209050601f83116001811462000655576000841562000640578287015190505b6200064c8582620005bf565b865550620006bc565b601f198416620006658662000401565b60005b828110156200068f5784890151825560018201915060208501945060208101905062000668565b86831015620006af5784890151620006ab601f8916826200059f565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60008190508160005260206000209050919050565b60008154620006f381620003cc565b620006ff8186620006c4565b945060018216600081146200071d576001811462000733576200076a565b60ff19831686528115158202860193506200076a565b6200073e85620006cf565b60005b83811015620007625781548189015260018201915060208101905062000741565b838801955050505b50505092915050565b6000620007818284620006e4565b915081905092915050565b6000819050919050565b620007a1816200078c565b82525050565b620007b28162000489565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007e582620007b8565b9050919050565b620007f781620007d8565b82525050565b600060a08201905062000814600083018862000796565b62000823602083018762000796565b62000832604083018662000796565b620008416060830185620007a7565b620008506080830184620007ec565b9695505050505050565b60805160a05160c0516117086200088a6000396000610725015260006106f1015260006106cb01526117086000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c5780639dc29fac116100665780639dc29fac14610261578063a9059cbb1461027d578063d505accf146102ad578063dd62ed3e146102c9576100ea565b806370a08231146101e35780637ecebe001461021357806395d89b4114610243576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b5780633644e515146101a957806340c10f19146101c7576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102f9565b6040516101049190610f12565b60405180910390f35b61012760048036038101906101229190610fcd565b610387565b6040516101349190611028565b60405180910390f35b610145610479565b6040516101529190611052565b60405180910390f35b6101756004803603810190610170919061106d565b61047f565b6040516101829190611028565b60405180910390f35b6101936106c9565b6040516101a091906110dc565b60405180910390f35b6101b16106ed565b6040516101be9190611110565b60405180910390f35b6101e160048036038101906101dc9190610fcd565b61074a565b005b6101fd60048036038101906101f8919061112b565b610758565b60405161020a9190611052565b60405180910390f35b61022d6004803603810190610228919061112b565b610770565b60405161023a9190611052565b60405180910390f35b61024b610788565b6040516102589190610f12565b60405180910390f35b61027b60048036038101906102769190610fcd565b610816565b005b61029760048036038101906102929190610fcd565b610824565b6040516102a49190611028565b60405180910390f35b6102c760048036038101906102c291906111b0565b610938565b005b6102e360048036038101906102de9190611252565b610c31565b6040516102f09190611052565b60405180910390f35b60008054610306906112c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610332906112c1565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104679190611052565b60405180910390a36001905092915050565b60025481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105b55782816105349190611321565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b82600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106049190611321565b9250508190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516106b59190611052565b60405180910390a360019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000046146107235761071e610c56565b610745565b7f00000000000000000000000000000000000000000000000000000000000000005b905090565b6107548282610ce2565b5050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60018054610795906112c1565b80601f01602080910402602001604051908101604052809291908181526020018280546107c1906112c1565b801561080e5780601f106107e35761010080835404028352916020019161080e565b820191906000526020600020905b8154815290600101906020018083116107f157829003601f168201915b505050505081565b6108208282610db2565b5050565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108759190611321565b9250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109269190611052565b60405180910390a36001905092915050565b4284101561097b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610972906113a1565b60405180910390fd5b600060016109876106ed565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98a8a8a600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558b604051602001610a0f969594939291906113d0565b60405160208183030381529060405280519060200120604051602001610a369291906114a9565b6040516020818303038152906040528051906020012085858560405160008152602001604052604051610a6c94939291906114e0565b6020604051602081039080840390855afa158015610a8e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610b0257508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3890611571565b60405180910390fd5b85600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92587604051610c209190611052565b60405180910390a350505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610c889190611634565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc64630604051602001610cc795949392919061164b565b60405160208183030381529060405280519060200120905090565b8060026000828254610cf4919061169e565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610da69190611052565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e019190611321565b9250508190555080600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e769190611052565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ebc578082015181840152602081019050610ea1565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ee482610e82565b610eee8185610e8d565b9350610efe818560208601610e9e565b610f0781610ec8565b840191505092915050565b60006020820190508181036000830152610f2c8184610ed9565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6482610f39565b9050919050565b610f7481610f59565b8114610f7f57600080fd5b50565b600081359050610f9181610f6b565b92915050565b6000819050919050565b610faa81610f97565b8114610fb557600080fd5b50565b600081359050610fc781610fa1565b92915050565b60008060408385031215610fe457610fe3610f34565b5b6000610ff285828601610f82565b925050602061100385828601610fb8565b9150509250929050565b60008115159050919050565b6110228161100d565b82525050565b600060208201905061103d6000830184611019565b92915050565b61104c81610f97565b82525050565b60006020820190506110676000830184611043565b92915050565b60008060006060848603121561108657611085610f34565b5b600061109486828701610f82565b93505060206110a586828701610f82565b92505060406110b686828701610fb8565b9150509250925092565b600060ff82169050919050565b6110d6816110c0565b82525050565b60006020820190506110f160008301846110cd565b92915050565b6000819050919050565b61110a816110f7565b82525050565b60006020820190506111256000830184611101565b92915050565b60006020828403121561114157611140610f34565b5b600061114f84828501610f82565b91505092915050565b611161816110c0565b811461116c57600080fd5b50565b60008135905061117e81611158565b92915050565b61118d816110f7565b811461119857600080fd5b50565b6000813590506111aa81611184565b92915050565b600080600080600080600060e0888a0312156111cf576111ce610f34565b5b60006111dd8a828b01610f82565b97505060206111ee8a828b01610f82565b96505060406111ff8a828b01610fb8565b95505060606112108a828b01610fb8565b94505060806112218a828b0161116f565b93505060a06112328a828b0161119b565b92505060c06112438a828b0161119b565b91505092959891949750929550565b6000806040838503121561126957611268610f34565b5b600061127785828601610f82565b925050602061128885828601610f82565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112d957607f821691505b6020821081036112ec576112eb611292565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061132c82610f97565b915061133783610f97565b925082820390508181111561134f5761134e6112f2565b5b92915050565b7f5045524d49545f444541444c494e455f45585049524544000000000000000000600082015250565b600061138b601783610e8d565b915061139682611355565b602082019050919050565b600060208201905081810360008301526113ba8161137e565b9050919050565b6113ca81610f59565b82525050565b600060c0820190506113e56000830189611101565b6113f260208301886113c1565b6113ff60408301876113c1565b61140c6060830186611043565b6114196080830185611043565b61142660a0830184611043565b979650505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611472600283611431565b915061147d8261143c565b600282019050919050565b6000819050919050565b6114a361149e826110f7565b611488565b82525050565b60006114b482611465565b91506114c08285611492565b6020820191506114d08284611492565b6020820191508190509392505050565b60006080820190506114f56000830187611101565b61150260208301866110cd565b61150f6040830185611101565b61151c6060830184611101565b95945050505050565b7f494e56414c49445f5349474e4552000000000000000000000000000000000000600082015250565b600061155b600e83610e8d565b915061156682611525565b602082019050919050565b6000602082019050818103600083015261158a8161154e565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546115be816112c1565b6115c88186611591565b945060018216600081146115e357600181146115f85761162b565b60ff198316865281151582028601935061162b565b6116018561159c565b60005b8381101561162357815481890152600182019150602081019050611604565b838801955050505b50505092915050565b600061164082846115b1565b915081905092915050565b600060a0820190506116606000830188611101565b61166d6020830187611101565b61167a6040830186611101565b6116876060830185611043565b61169460808301846113c1565b9695505050505050565b60006116a982610f97565b91506116b483610f97565b92508282019050808211156116cc576116cb6112f2565b5b9291505056fea26469706673582212207e04676a32a8f104ff86f7d4dcab54be350c4fae7974f5a1c6a8e33867d5a83e64736f6c63430008120033",
    "sourceMap": "111:368:2:-:0;;;145:138;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;254:5;261:7;270:9;2101:5:0;2094:4;:12;;;;;;:::i;:::-;;2125:7;2116:6;:16;;;;;;:::i;:::-;;2153:9;2142:20;;;;;;;;;;2192:13;2173:32;;;;;;2242:24;:22;;;:24;;:::i;:::-;2215:51;;;;;;1981:292;;;145:138:2;;;111:368;;5510:446:0;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;5833:14;5869:13;5912:4;5640:295;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;7:75:5:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:246::-;1691:1;1701:113;1715:6;1712:1;1709:13;1701:113;;;1800:1;1795:3;1791:11;1785:18;1781:1;1776:3;1772:11;1765:39;1737:2;1734:1;1730:10;1725:15;;1701:113;;;1848:1;1839:6;1834:3;1830:16;1823:27;1672:184;1610:246;;;:::o;1862:434::-;1951:5;1976:66;1992:49;2034:6;1992:49;:::i;:::-;1976:66;:::i;:::-;1967:75;;2065:6;2058:5;2051:21;2103:4;2096:5;2092:16;2141:3;2132:6;2127:3;2123:16;2120:25;2117:112;;;2148:79;;:::i;:::-;2117:112;2238:52;2283:6;2278:3;2273;2238:52;:::i;:::-;1957:339;1862:434;;;;;:::o;2316:355::-;2383:5;2432:3;2425:4;2417:6;2413:17;2409:27;2399:122;;2440:79;;:::i;:::-;2399:122;2550:6;2544:13;2575:90;2661:3;2653:6;2646:4;2638:6;2634:17;2575:90;:::i;:::-;2566:99;;2389:282;2316:355;;;;:::o;2677:86::-;2712:7;2752:4;2745:5;2741:16;2730:27;;2677:86;;;:::o;2769:118::-;2840:22;2856:5;2840:22;:::i;:::-;2833:5;2830:33;2820:61;;2877:1;2874;2867:12;2820:61;2769:118;:::o;2893:139::-;2948:5;2979:6;2973:13;2964:22;;2995:31;3020:5;2995:31;:::i;:::-;2893:139;;;;:::o;3038:1005::-;3144:6;3152;3160;3209:2;3197:9;3188:7;3184:23;3180:32;3177:119;;;3215:79;;:::i;:::-;3177:119;3356:1;3345:9;3341:17;3335:24;3386:18;3378:6;3375:30;3372:117;;;3408:79;;:::i;:::-;3372:117;3513:74;3579:7;3570:6;3559:9;3555:22;3513:74;:::i;:::-;3503:84;;3306:291;3657:2;3646:9;3642:18;3636:25;3688:18;3680:6;3677:30;3674:117;;;3710:79;;:::i;:::-;3674:117;3815:74;3881:7;3872:6;3861:9;3857:22;3815:74;:::i;:::-;3805:84;;3607:292;3938:2;3964:62;4018:7;4009:6;3998:9;3994:22;3964:62;:::i;:::-;3954:72;;3909:127;3038:1005;;;;;:::o;4049:99::-;4101:6;4135:5;4129:12;4119:22;;4049:99;;;:::o;4154:180::-;4202:77;4199:1;4192:88;4299:4;4296:1;4289:15;4323:4;4320:1;4313:15;4340:320;4384:6;4421:1;4415:4;4411:12;4401:22;;4468:1;4462:4;4458:12;4489:18;4479:81;;4545:4;4537:6;4533:17;4523:27;;4479:81;4607:2;4599:6;4596:14;4576:18;4573:38;4570:84;;4626:18;;:::i;:::-;4570:84;4391:269;4340:320;;;:::o;4666:141::-;4715:4;4738:3;4730:11;;4761:3;4758:1;4751:14;4795:4;4792:1;4782:18;4774:26;;4666:141;;;:::o;4813:93::-;4850:6;4897:2;4892;4885:5;4881:14;4877:23;4867:33;;4813:93;;;:::o;4912:107::-;4956:8;5006:5;5000:4;4996:16;4975:37;;4912:107;;;;:::o;5025:393::-;5094:6;5144:1;5132:10;5128:18;5167:97;5197:66;5186:9;5167:97;:::i;:::-;5285:39;5315:8;5304:9;5285:39;:::i;:::-;5273:51;;5357:4;5353:9;5346:5;5342:21;5333:30;;5406:4;5396:8;5392:19;5385:5;5382:30;5372:40;;5101:317;;5025:393;;;;;:::o;5424:77::-;5461:7;5490:5;5479:16;;5424:77;;;:::o;5507:60::-;5535:3;5556:5;5549:12;;5507:60;;;:::o;5573:142::-;5623:9;5656:53;5674:34;5683:24;5701:5;5683:24;:::i;:::-;5674:34;:::i;:::-;5656:53;:::i;:::-;5643:66;;5573:142;;;:::o;5721:75::-;5764:3;5785:5;5778:12;;5721:75;;;:::o;5802:269::-;5912:39;5943:7;5912:39;:::i;:::-;5973:91;6022:41;6046:16;6022:41;:::i;:::-;6014:6;6007:4;6001:11;5973:91;:::i;:::-;5967:4;5960:105;5878:193;5802:269;;;:::o;6077:73::-;6122:3;6077:73;:::o;6156:189::-;6233:32;;:::i;:::-;6274:65;6332:6;6324;6318:4;6274:65;:::i;:::-;6209:136;6156:189;;:::o;6351:186::-;6411:120;6428:3;6421:5;6418:14;6411:120;;;6482:39;6519:1;6512:5;6482:39;:::i;:::-;6455:1;6448:5;6444:13;6435:22;;6411:120;;;6351:186;;:::o;6543:543::-;6644:2;6639:3;6636:11;6633:446;;;6678:38;6710:5;6678:38;:::i;:::-;6762:29;6780:10;6762:29;:::i;:::-;6752:8;6748:44;6945:2;6933:10;6930:18;6927:49;;;6966:8;6951:23;;6927:49;6989:80;7045:22;7063:3;7045:22;:::i;:::-;7035:8;7031:37;7018:11;6989:80;:::i;:::-;6648:431;;6633:446;6543:543;;;:::o;7092:117::-;7146:8;7196:5;7190:4;7186:16;7165:37;;7092:117;;;;:::o;7215:169::-;7259:6;7292:51;7340:1;7336:6;7328:5;7325:1;7321:13;7292:51;:::i;:::-;7288:56;7373:4;7367;7363:15;7353:25;;7266:118;7215:169;;;;:::o;7389:295::-;7465:4;7611:29;7636:3;7630:4;7611:29;:::i;:::-;7603:37;;7673:3;7670:1;7666:11;7660:4;7657:21;7649:29;;7389:295;;;;:::o;7689:1395::-;7806:37;7839:3;7806:37;:::i;:::-;7908:18;7900:6;7897:30;7894:56;;;7930:18;;:::i;:::-;7894:56;7974:38;8006:4;8000:11;7974:38;:::i;:::-;8059:67;8119:6;8111;8105:4;8059:67;:::i;:::-;8153:1;8177:4;8164:17;;8209:2;8201:6;8198:14;8226:1;8221:618;;;;8883:1;8900:6;8897:77;;;8949:9;8944:3;8940:19;8934:26;8925:35;;8897:77;9000:67;9060:6;9053:5;9000:67;:::i;:::-;8994:4;8987:81;8856:222;8191:887;;8221:618;8273:4;8269:9;8261:6;8257:22;8307:37;8339:4;8307:37;:::i;:::-;8366:1;8380:208;8394:7;8391:1;8388:14;8380:208;;;8473:9;8468:3;8464:19;8458:26;8450:6;8443:42;8524:1;8516:6;8512:14;8502:24;;8571:2;8560:9;8556:18;8543:31;;8417:4;8414:1;8410:12;8405:17;;8380:208;;;8616:6;8607:7;8604:19;8601:179;;;8674:9;8669:3;8665:19;8659:26;8717:48;8759:4;8751:6;8747:17;8736:9;8717:48;:::i;:::-;8709:6;8702:64;8624:156;8601:179;8826:1;8822;8814:6;8810:14;8806:22;8800:4;8793:36;8228:611;;;8191:887;;7781:1303;;;7689:1395;;:::o;9090:147::-;9191:11;9228:3;9213:18;;9090:147;;;;:::o;9243:144::-;9295:4;9318:3;9310:11;;9341:3;9338:1;9331:14;9375:4;9372:1;9362:18;9354:26;;9243:144;;;:::o;9415:878::-;9520:3;9557:5;9551:12;9586:36;9612:9;9586:36;:::i;:::-;9638:88;9719:6;9714:3;9638:88;:::i;:::-;9631:95;;9757:1;9746:9;9742:17;9773:1;9768:166;;;;9948:1;9943:344;;;;9735:552;;9768:166;9852:4;9848:9;9837;9833:25;9828:3;9821:38;9914:6;9907:14;9900:22;9892:6;9888:35;9883:3;9879:45;9872:52;;9768:166;;9943:344;10010:41;10045:5;10010:41;:::i;:::-;10073:1;10087:154;10101:6;10098:1;10095:13;10087:154;;;10175:7;10169:14;10165:1;10160:3;10156:11;10149:35;10225:1;10216:7;10212:15;10201:26;;10123:4;10120:1;10116:12;10111:17;;10087:154;;;10270:6;10265:3;10261:16;10254:23;;9950:337;;9735:552;;9524:769;;9415:878;;;;:::o;10299:273::-;10430:3;10452:94;10542:3;10533:6;10452:94;:::i;:::-;10445:101;;10563:3;10556:10;;10299:273;;;;:::o;10578:77::-;10615:7;10644:5;10633:16;;10578:77;;;:::o;10661:118::-;10748:24;10766:5;10748:24;:::i;:::-;10743:3;10736:37;10661:118;;:::o;10785:::-;10872:24;10890:5;10872:24;:::i;:::-;10867:3;10860:37;10785:118;;:::o;10909:126::-;10946:7;10986:42;10979:5;10975:54;10964:65;;10909:126;;;:::o;11041:96::-;11078:7;11107:24;11125:5;11107:24;:::i;:::-;11096:35;;11041:96;;;:::o;11143:118::-;11230:24;11248:5;11230:24;:::i;:::-;11225:3;11218:37;11143:118;;:::o;11267:664::-;11472:4;11510:3;11499:9;11495:19;11487:27;;11524:71;11592:1;11581:9;11577:17;11568:6;11524:71;:::i;:::-;11605:72;11673:2;11662:9;11658:18;11649:6;11605:72;:::i;:::-;11687;11755:2;11744:9;11740:18;11731:6;11687:72;:::i;:::-;11769;11837:2;11826:9;11822:18;11813:6;11769:72;:::i;:::-;11851:73;11919:3;11908:9;11904:19;11895:6;11851:73;:::i;:::-;11267:664;;;;;;;;:::o;111:368:2:-;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c5780639dc29fac116100665780639dc29fac14610261578063a9059cbb1461027d578063d505accf146102ad578063dd62ed3e146102c9576100ea565b806370a08231146101e35780637ecebe001461021357806395d89b4114610243576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b5780633644e515146101a957806340c10f19146101c7576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102f9565b6040516101049190610f12565b60405180910390f35b61012760048036038101906101229190610fcd565b610387565b6040516101349190611028565b60405180910390f35b610145610479565b6040516101529190611052565b60405180910390f35b6101756004803603810190610170919061106d565b61047f565b6040516101829190611028565b60405180910390f35b6101936106c9565b6040516101a091906110dc565b60405180910390f35b6101b16106ed565b6040516101be9190611110565b60405180910390f35b6101e160048036038101906101dc9190610fcd565b61074a565b005b6101fd60048036038101906101f8919061112b565b610758565b60405161020a9190611052565b60405180910390f35b61022d6004803603810190610228919061112b565b610770565b60405161023a9190611052565b60405180910390f35b61024b610788565b6040516102589190610f12565b60405180910390f35b61027b60048036038101906102769190610fcd565b610816565b005b61029760048036038101906102929190610fcd565b610824565b6040516102a49190611028565b60405180910390f35b6102c760048036038101906102c291906111b0565b610938565b005b6102e360048036038101906102de9190611252565b610c31565b6040516102f09190611052565b60405180910390f35b60008054610306906112c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610332906112c1565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104679190611052565b60405180910390a36001905092915050565b60025481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105b55782816105349190611321565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b82600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106049190611321565b9250508190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516106b59190611052565b60405180910390a360019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000046146107235761071e610c56565b610745565b7f00000000000000000000000000000000000000000000000000000000000000005b905090565b6107548282610ce2565b5050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60018054610795906112c1565b80601f01602080910402602001604051908101604052809291908181526020018280546107c1906112c1565b801561080e5780601f106107e35761010080835404028352916020019161080e565b820191906000526020600020905b8154815290600101906020018083116107f157829003601f168201915b505050505081565b6108208282610db2565b5050565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108759190611321565b9250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109269190611052565b60405180910390a36001905092915050565b4284101561097b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610972906113a1565b60405180910390fd5b600060016109876106ed565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98a8a8a600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558b604051602001610a0f969594939291906113d0565b60405160208183030381529060405280519060200120604051602001610a369291906114a9565b6040516020818303038152906040528051906020012085858560405160008152602001604052604051610a6c94939291906114e0565b6020604051602081039080840390855afa158015610a8e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610b0257508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3890611571565b60405180910390fd5b85600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92587604051610c209190611052565b60405180910390a350505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610c889190611634565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc64630604051602001610cc795949392919061164b565b60405160208183030381529060405280519060200120905090565b8060026000828254610cf4919061169e565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610da69190611052565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e019190611321565b9250508190555080600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e769190611052565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ebc578082015181840152602081019050610ea1565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ee482610e82565b610eee8185610e8d565b9350610efe818560208601610e9e565b610f0781610ec8565b840191505092915050565b60006020820190508181036000830152610f2c8184610ed9565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6482610f39565b9050919050565b610f7481610f59565b8114610f7f57600080fd5b50565b600081359050610f9181610f6b565b92915050565b6000819050919050565b610faa81610f97565b8114610fb557600080fd5b50565b600081359050610fc781610fa1565b92915050565b60008060408385031215610fe457610fe3610f34565b5b6000610ff285828601610f82565b925050602061100385828601610fb8565b9150509250929050565b60008115159050919050565b6110228161100d565b82525050565b600060208201905061103d6000830184611019565b92915050565b61104c81610f97565b82525050565b60006020820190506110676000830184611043565b92915050565b60008060006060848603121561108657611085610f34565b5b600061109486828701610f82565b93505060206110a586828701610f82565b92505060406110b686828701610fb8565b9150509250925092565b600060ff82169050919050565b6110d6816110c0565b82525050565b60006020820190506110f160008301846110cd565b92915050565b6000819050919050565b61110a816110f7565b82525050565b60006020820190506111256000830184611101565b92915050565b60006020828403121561114157611140610f34565b5b600061114f84828501610f82565b91505092915050565b611161816110c0565b811461116c57600080fd5b50565b60008135905061117e81611158565b92915050565b61118d816110f7565b811461119857600080fd5b50565b6000813590506111aa81611184565b92915050565b600080600080600080600060e0888a0312156111cf576111ce610f34565b5b60006111dd8a828b01610f82565b97505060206111ee8a828b01610f82565b96505060406111ff8a828b01610fb8565b95505060606112108a828b01610fb8565b94505060806112218a828b0161116f565b93505060a06112328a828b0161119b565b92505060c06112438a828b0161119b565b91505092959891949750929550565b6000806040838503121561126957611268610f34565b5b600061127785828601610f82565b925050602061128885828601610f82565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112d957607f821691505b6020821081036112ec576112eb611292565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061132c82610f97565b915061133783610f97565b925082820390508181111561134f5761134e6112f2565b5b92915050565b7f5045524d49545f444541444c494e455f45585049524544000000000000000000600082015250565b600061138b601783610e8d565b915061139682611355565b602082019050919050565b600060208201905081810360008301526113ba8161137e565b9050919050565b6113ca81610f59565b82525050565b600060c0820190506113e56000830189611101565b6113f260208301886113c1565b6113ff60408301876113c1565b61140c6060830186611043565b6114196080830185611043565b61142660a0830184611043565b979650505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611472600283611431565b915061147d8261143c565b600282019050919050565b6000819050919050565b6114a361149e826110f7565b611488565b82525050565b60006114b482611465565b91506114c08285611492565b6020820191506114d08284611492565b6020820191508190509392505050565b60006080820190506114f56000830187611101565b61150260208301866110cd565b61150f6040830185611101565b61151c6060830184611101565b95945050505050565b7f494e56414c49445f5349474e4552000000000000000000000000000000000000600082015250565b600061155b600e83610e8d565b915061156682611525565b602082019050919050565b6000602082019050818103600083015261158a8161154e565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546115be816112c1565b6115c88186611591565b945060018216600081146115e357600181146115f85761162b565b60ff198316865281151582028601935061162b565b6116018561159c565b60005b8381101561162357815481890152600182019150602081019050611604565b838801955050505b50505092915050565b600061164082846115b1565b915081905092915050565b600060a0820190506116606000830188611101565b61166d6020830187611101565b61167a6040830186611101565b6116876060830185611043565b61169460808301846113c1565b9695505050505050565b60006116a982610f97565b91506116b483610f97565b92508282019050808211156116cc576116cb6112f2565b5b9291505056fea26469706673582212207e04676a32a8f104ff86f7d4dcab54be350c4fae7974f5a1c6a8e33867d5a83e64736f6c63430008120033",
    "sourceMap": "111:368:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1031:18:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2461:211;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1304:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3057:592;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1083:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5327:177;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;289:89:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1337:44:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1751:41;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1056:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;384:93:2;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2678:373:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3838:1483;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1388:64;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1031:18;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2535:4;2584:6;2551:9;:21;2561:10;2551:21;;;;;;;;;;;;;;;:30;2573:7;2551:30;;;;;;;;;;;;;;;:39;;;;2627:7;2606:37;;2615:10;2606:37;;;2636:6;2606:37;;;;;;:::i;:::-;;;;;;;;2661:4;2654:11;;2461:211;;;;:::o;1304:26::-;;;;:::o;3057:592::-;3175:4;3191:15;3209:9;:15;3219:4;3209:15;;;;;;;;;;;;;;;:27;3225:10;3209:27;;;;;;;;;;;;;;;;3191:45;;3298:17;3287:7;:28;3283:80;;3357:6;3347:7;:16;;;;:::i;:::-;3317:9;:15;3327:4;3317:15;;;;;;;;;;;;;;;:27;3333:10;3317:27;;;;;;;;;;;;;;;:46;;;;3283:80;3393:6;3374:9;:15;3384:4;3374:15;;;;;;;;;;;;;;;;:25;;;;;;;:::i;:::-;;;;;;;;3562:6;3545:9;:13;3555:2;3545:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;3609:2;3594:26;;3603:4;3594:26;;;3613:6;3594:26;;;;;;:::i;:::-;;;;;;;;3638:4;3631:11;;;3057:592;;;;;:::o;1083:31::-;;;:::o;5327:177::-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5410:87;;;5446:24;5410:87;5403:94;;5327:177;:::o;289:89:2:-;355:16;361:2;365:5;355;:16::i;:::-;289:89;;:::o;1337:44:0:-;;;;;;;;;;;;;;;;;:::o;1751:41::-;;;;;;;;;;;;;;;;;:::o;1056:20::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;384:93:2:-;452:18;458:4;464:5;452;:18::i;:::-;384:93;;:::o;2678:373:0:-;2748:4;2789:6;2764:9;:21;2774:10;2764:21;;;;;;;;;;;;;;;;:31;;;;;;;:::i;:::-;;;;;;;;2958:6;2941:9;:13;2951:2;2941:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;3011:2;2990:32;;2999:10;2990:32;;;3015:6;2990:32;;;;;;:::i;:::-;;;;;;;;3040:4;3033:11;;2678:373;;;;:::o;3838:1483::-;4057:15;4045:8;:27;;4037:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;4265:24;4292:805;4428:18;:16;:18::i;:::-;4555:165;4754:5;4793:7;4834:5;4873:6;:13;4880:5;4873:13;;;;;;;;;;;;;;;;:15;;;;;;;;;;;;4922:8;4511:449;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;4472:514;;;;;;4350:658;;;;;;;;;:::i;:::-;;;;;;;;;;;;;4319:707;;;;;;5044:1;5063;5082;4292:805;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4265:832;;5148:1;5120:30;;:16;:30;;;;:59;;;;;5174:5;5154:25;;:16;:25;;;5120:59;5112:86;;;;;;;;;;;;:::i;:::-;;;;;;;;;5252:5;5213:9;:27;5223:16;5213:27;;;;;;;;;;;;;;;:36;5241:7;5213:36;;;;;;;;;;;;;;;:44;;;;4241:1027;5299:7;5283:31;;5292:5;5283:31;;;5308:5;5283:31;;;;;;:::i;:::-;;;;;;;;3838:1483;;;;;;;:::o;1388:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5510:446::-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;5833:14;5869:13;5912:4;5640:295;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;6150:325::-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;;;;;6404:6;6387:9;:13;6397:2;6387:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;6457:2;6436:32;;6453:1;6436:32;;;6461:6;6436:32;;;;;;:::i;:::-;;;;;;;;6150:325;;:::o;6481:328::-;6572:6;6553:9;:15;6563:4;6553:15;;;;;;;;;;;;;;;;:25;;;;;;;:::i;:::-;;;;;;;;6736:6;6721:11;;:21;;;;;;;;;;;6791:1;6768:34;;6777:4;6768:34;;;6795:6;6768:34;;;;;;:::i;:::-;;;;;;;;6481:328;;:::o;7:99:5:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1430:117::-;1539:1;1536;1529:12;1676:126;1713:7;1753:42;1746:5;1742:54;1731:65;;1676:126;;;:::o;1808:96::-;1845:7;1874:24;1892:5;1874:24;:::i;:::-;1863:35;;1808:96;;;:::o;1910:122::-;1983:24;2001:5;1983:24;:::i;:::-;1976:5;1973:35;1963:63;;2022:1;2019;2012:12;1963:63;1910:122;:::o;2038:139::-;2084:5;2122:6;2109:20;2100:29;;2138:33;2165:5;2138:33;:::i;:::-;2038:139;;;;:::o;2183:77::-;2220:7;2249:5;2238:16;;2183:77;;;:::o;2266:122::-;2339:24;2357:5;2339:24;:::i;:::-;2332:5;2329:35;2319:63;;2378:1;2375;2368:12;2319:63;2266:122;:::o;2394:139::-;2440:5;2478:6;2465:20;2456:29;;2494:33;2521:5;2494:33;:::i;:::-;2394:139;;;;:::o;2539:474::-;2607:6;2615;2664:2;2652:9;2643:7;2639:23;2635:32;2632:119;;;2670:79;;:::i;:::-;2632:119;2790:1;2815:53;2860:7;2851:6;2840:9;2836:22;2815:53;:::i;:::-;2805:63;;2761:117;2917:2;2943:53;2988:7;2979:6;2968:9;2964:22;2943:53;:::i;:::-;2933:63;;2888:118;2539:474;;;;;:::o;3019:90::-;3053:7;3096:5;3089:13;3082:21;3071:32;;3019:90;;;:::o;3115:109::-;3196:21;3211:5;3196:21;:::i;:::-;3191:3;3184:34;3115:109;;:::o;3230:210::-;3317:4;3355:2;3344:9;3340:18;3332:26;;3368:65;3430:1;3419:9;3415:17;3406:6;3368:65;:::i;:::-;3230:210;;;;:::o;3446:118::-;3533:24;3551:5;3533:24;:::i;:::-;3528:3;3521:37;3446:118;;:::o;3570:222::-;3663:4;3701:2;3690:9;3686:18;3678:26;;3714:71;3782:1;3771:9;3767:17;3758:6;3714:71;:::i;:::-;3570:222;;;;:::o;3798:619::-;3875:6;3883;3891;3940:2;3928:9;3919:7;3915:23;3911:32;3908:119;;;3946:79;;:::i;:::-;3908:119;4066:1;4091:53;4136:7;4127:6;4116:9;4112:22;4091:53;:::i;:::-;4081:63;;4037:117;4193:2;4219:53;4264:7;4255:6;4244:9;4240:22;4219:53;:::i;:::-;4209:63;;4164:118;4321:2;4347:53;4392:7;4383:6;4372:9;4368:22;4347:53;:::i;:::-;4337:63;;4292:118;3798:619;;;;;:::o;4423:86::-;4458:7;4498:4;4491:5;4487:16;4476:27;;4423:86;;;:::o;4515:112::-;4598:22;4614:5;4598:22;:::i;:::-;4593:3;4586:35;4515:112;;:::o;4633:214::-;4722:4;4760:2;4749:9;4745:18;4737:26;;4773:67;4837:1;4826:9;4822:17;4813:6;4773:67;:::i;:::-;4633:214;;;;:::o;4853:77::-;4890:7;4919:5;4908:16;;4853:77;;;:::o;4936:118::-;5023:24;5041:5;5023:24;:::i;:::-;5018:3;5011:37;4936:118;;:::o;5060:222::-;5153:4;5191:2;5180:9;5176:18;5168:26;;5204:71;5272:1;5261:9;5257:17;5248:6;5204:71;:::i;:::-;5060:222;;;;:::o;5288:329::-;5347:6;5396:2;5384:9;5375:7;5371:23;5367:32;5364:119;;;5402:79;;:::i;:::-;5364:119;5522:1;5547:53;5592:7;5583:6;5572:9;5568:22;5547:53;:::i;:::-;5537:63;;5493:117;5288:329;;;;:::o;5623:118::-;5694:22;5710:5;5694:22;:::i;:::-;5687:5;5684:33;5674:61;;5731:1;5728;5721:12;5674:61;5623:118;:::o;5747:135::-;5791:5;5829:6;5816:20;5807:29;;5845:31;5870:5;5845:31;:::i;:::-;5747:135;;;;:::o;5888:122::-;5961:24;5979:5;5961:24;:::i;:::-;5954:5;5951:35;5941:63;;6000:1;5997;5990:12;5941:63;5888:122;:::o;6016:139::-;6062:5;6100:6;6087:20;6078:29;;6116:33;6143:5;6116:33;:::i;:::-;6016:139;;;;:::o;6161:1199::-;6272:6;6280;6288;6296;6304;6312;6320;6369:3;6357:9;6348:7;6344:23;6340:33;6337:120;;;6376:79;;:::i;:::-;6337:120;6496:1;6521:53;6566:7;6557:6;6546:9;6542:22;6521:53;:::i;:::-;6511:63;;6467:117;6623:2;6649:53;6694:7;6685:6;6674:9;6670:22;6649:53;:::i;:::-;6639:63;;6594:118;6751:2;6777:53;6822:7;6813:6;6802:9;6798:22;6777:53;:::i;:::-;6767:63;;6722:118;6879:2;6905:53;6950:7;6941:6;6930:9;6926:22;6905:53;:::i;:::-;6895:63;;6850:118;7007:3;7034:51;7077:7;7068:6;7057:9;7053:22;7034:51;:::i;:::-;7024:61;;6978:117;7134:3;7161:53;7206:7;7197:6;7186:9;7182:22;7161:53;:::i;:::-;7151:63;;7105:119;7263:3;7290:53;7335:7;7326:6;7315:9;7311:22;7290:53;:::i;:::-;7280:63;;7234:119;6161:1199;;;;;;;;;;:::o;7366:474::-;7434:6;7442;7491:2;7479:9;7470:7;7466:23;7462:32;7459:119;;;7497:79;;:::i;:::-;7459:119;7617:1;7642:53;7687:7;7678:6;7667:9;7663:22;7642:53;:::i;:::-;7632:63;;7588:117;7744:2;7770:53;7815:7;7806:6;7795:9;7791:22;7770:53;:::i;:::-;7760:63;;7715:118;7366:474;;;;;:::o;7846:180::-;7894:77;7891:1;7884:88;7991:4;7988:1;7981:15;8015:4;8012:1;8005:15;8032:320;8076:6;8113:1;8107:4;8103:12;8093:22;;8160:1;8154:4;8150:12;8181:18;8171:81;;8237:4;8229:6;8225:17;8215:27;;8171:81;8299:2;8291:6;8288:14;8268:18;8265:38;8262:84;;8318:18;;:::i;:::-;8262:84;8083:269;8032:320;;;:::o;8358:180::-;8406:77;8403:1;8396:88;8503:4;8500:1;8493:15;8527:4;8524:1;8517:15;8544:194;8584:4;8604:20;8622:1;8604:20;:::i;:::-;8599:25;;8638:20;8656:1;8638:20;:::i;:::-;8633:25;;8682:1;8679;8675:9;8667:17;;8706:1;8700:4;8697:11;8694:37;;;8711:18;;:::i;:::-;8694:37;8544:194;;;;:::o;8744:173::-;8884:25;8880:1;8872:6;8868:14;8861:49;8744:173;:::o;8923:366::-;9065:3;9086:67;9150:2;9145:3;9086:67;:::i;:::-;9079:74;;9162:93;9251:3;9162:93;:::i;:::-;9280:2;9275:3;9271:12;9264:19;;8923:366;;;:::o;9295:419::-;9461:4;9499:2;9488:9;9484:18;9476:26;;9548:9;9542:4;9538:20;9534:1;9523:9;9519:17;9512:47;9576:131;9702:4;9576:131;:::i;:::-;9568:139;;9295:419;;;:::o;9720:118::-;9807:24;9825:5;9807:24;:::i;:::-;9802:3;9795:37;9720:118;;:::o;9844:775::-;10077:4;10115:3;10104:9;10100:19;10092:27;;10129:71;10197:1;10186:9;10182:17;10173:6;10129:71;:::i;:::-;10210:72;10278:2;10267:9;10263:18;10254:6;10210:72;:::i;:::-;10292;10360:2;10349:9;10345:18;10336:6;10292:72;:::i;:::-;10374;10442:2;10431:9;10427:18;10418:6;10374:72;:::i;:::-;10456:73;10524:3;10513:9;10509:19;10500:6;10456:73;:::i;:::-;10539;10607:3;10596:9;10592:19;10583:6;10539:73;:::i;:::-;9844:775;;;;;;;;;:::o;10625:148::-;10727:11;10764:3;10749:18;;10625:148;;;;:::o;10779:214::-;10919:66;10915:1;10907:6;10903:14;10896:90;10779:214;:::o;10999:400::-;11159:3;11180:84;11262:1;11257:3;11180:84;:::i;:::-;11173:91;;11273:93;11362:3;11273:93;:::i;:::-;11391:1;11386:3;11382:11;11375:18;;10999:400;;;:::o;11405:79::-;11444:7;11473:5;11462:16;;11405:79;;;:::o;11490:157::-;11595:45;11615:24;11633:5;11615:24;:::i;:::-;11595:45;:::i;:::-;11590:3;11583:58;11490:157;;:::o;11653:663::-;11894:3;11916:148;12060:3;11916:148;:::i;:::-;11909:155;;12074:75;12145:3;12136:6;12074:75;:::i;:::-;12174:2;12169:3;12165:12;12158:19;;12187:75;12258:3;12249:6;12187:75;:::i;:::-;12287:2;12282:3;12278:12;12271:19;;12307:3;12300:10;;11653:663;;;;;:::o;12322:545::-;12495:4;12533:3;12522:9;12518:19;12510:27;;12547:71;12615:1;12604:9;12600:17;12591:6;12547:71;:::i;:::-;12628:68;12692:2;12681:9;12677:18;12668:6;12628:68;:::i;:::-;12706:72;12774:2;12763:9;12759:18;12750:6;12706:72;:::i;:::-;12788;12856:2;12845:9;12841:18;12832:6;12788:72;:::i;:::-;12322:545;;;;;;;:::o;12873:164::-;13013:16;13009:1;13001:6;12997:14;12990:40;12873:164;:::o;13043:366::-;13185:3;13206:67;13270:2;13265:3;13206:67;:::i;:::-;13199:74;;13282:93;13371:3;13282:93;:::i;:::-;13400:2;13395:3;13391:12;13384:19;;13043:366;;;:::o;13415:419::-;13581:4;13619:2;13608:9;13604:18;13596:26;;13668:9;13662:4;13658:20;13654:1;13643:9;13639:17;13632:47;13696:131;13822:4;13696:131;:::i;:::-;13688:139;;13415:419;;;:::o;13840:147::-;13941:11;13978:3;13963:18;;13840:147;;;;:::o;13993:144::-;14045:4;14068:3;14060:11;;14091:3;14088:1;14081:14;14125:4;14122:1;14112:18;14104:26;;13993:144;;;:::o;14165:878::-;14270:3;14307:5;14301:12;14336:36;14362:9;14336:36;:::i;:::-;14388:88;14469:6;14464:3;14388:88;:::i;:::-;14381:95;;14507:1;14496:9;14492:17;14523:1;14518:166;;;;14698:1;14693:344;;;;14485:552;;14518:166;14602:4;14598:9;14587;14583:25;14578:3;14571:38;14664:6;14657:14;14650:22;14642:6;14638:35;14633:3;14629:45;14622:52;;14518:166;;14693:344;14760:41;14795:5;14760:41;:::i;:::-;14823:1;14837:154;14851:6;14848:1;14845:13;14837:154;;;14925:7;14919:14;14915:1;14910:3;14906:11;14899:35;14975:1;14966:7;14962:15;14951:26;;14873:4;14870:1;14866:12;14861:17;;14837:154;;;15020:6;15015:3;15011:16;15004:23;;14700:337;;14485:552;;14274:769;;14165:878;;;;:::o;15049:273::-;15180:3;15202:94;15292:3;15283:6;15202:94;:::i;:::-;15195:101;;15313:3;15306:10;;15049:273;;;;:::o;15328:664::-;15533:4;15571:3;15560:9;15556:19;15548:27;;15585:71;15653:1;15642:9;15638:17;15629:6;15585:71;:::i;:::-;15666:72;15734:2;15723:9;15719:18;15710:6;15666:72;:::i;:::-;15748;15816:2;15805:9;15801:18;15792:6;15748:72;:::i;:::-;15830;15898:2;15887:9;15883:18;15874:6;15830:72;:::i;:::-;15912:73;15980:3;15969:9;15965:19;15956:6;15912:73;:::i;:::-;15328:664;;;;;;;;:::o;15998:191::-;16038:3;16057:20;16075:1;16057:20;:::i;:::-;16052:25;;16091:20;16109:1;16091:20;:::i;:::-;16086:25;;16134:1;16131;16127:9;16120:16;;16155:3;16152:1;16149:10;16146:36;;;16162:18;;:::i;:::-;16146:36;15998:191;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "24": [
        {
          "start": 1739,
          "length": 32
        }
      ],
      "38": [
        {
          "start": 1777,
          "length": 32
        }
      ],
      "40": [
        {
          "start": 1829,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(address,uint256)": "9dc29fac",
    "decimals()": "313ce567",
    "mint(address,uint256)": "40c10f19",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MockERC20.sol\":\"MockERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":solmate/=../../node_modules/solmate/\"]},\"sources\":{\"../../node_modules/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"src/MockERC20.sol\":{\"keccak256\":\"0x49836aafa3083540e996e436239b93cd31a0fc6a16f794af8899d8ec15ebf446\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://18a7d475c7fc8134374b7eba77055bf306f9c5b5851c0eb75f68f4be34039494\",\"dweb:/ipfs/QmUhAJ5PKBfZaw4N1YyaEmmtGnxu19YKXUb1b4tLKX4hk9\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.18+commit.87f61d96"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "_decimals",
              "type": "uint8"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burn"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permit"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "solmate/=../../node_modules/solmate/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/MockERC20.sol": "MockERC20"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "../../node_modules/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "src/MockERC20.sol": {
        "keccak256": "0x49836aafa3083540e996e436239b93cd31a0fc6a16f794af8899d8ec15ebf446",
        "urls": [
          "bzz-raw://18a7d475c7fc8134374b7eba77055bf306f9c5b5851c0eb75f68f4be34039494",
          "dweb:/ipfs/QmUhAJ5PKBfZaw4N1YyaEmmtGnxu19YKXUb1b4tLKX4hk9"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 2
} as const;

