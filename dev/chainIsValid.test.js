const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();



const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1542099892507,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1542099914450,
            "transactions": [
                {
                    "amount": 45,
                    "sender": "WEdDF32309E546R444EF54",
                    "recipient": "DFD453DFSDF2SDDRF343EDD",
                    "transactionId": "34980610e72311e8b84e194b7741be9b"
                },
                {
                    "amount": 65,
                    "sender": "WEdDF32309E546R444EF54",
                    "recipient": "DFD453DFSDF2SDDRF343EDD",
                    "transactionId": "3707f4a0e72311e8b84e194b7741be9b"
                },
                {
                    "amount": 600,
                    "sender": "WEdDF32309E546R444EF54",
                    "recipient": "DFD453DFSDF2SDDRF343EDD",
                    "transactionId": "3a0ef310e72311e8b84e194b7741be9b"
                }
            ],
            "nonce": 44242,
            "hash": "0000d0900c6fc82c7b90270ae098f74013afcac1f0c0a859b55762c68ee4235a",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1542099916710,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "2e83eeb0e72311e8b84e194b7741be9b",
                    "transactionId": "3b9963a0e72311e8b84e194b7741be9b"
                }
            ],
            "nonce": 147581,
            "hash": "00004da05343bf94841bad700b69140dbca7c08b03f9cf0c05b5815f63495cae",
            "previousBlockHash": "0000d0900c6fc82c7b90270ae098f74013afcac1f0c0a859b55762c68ee4235a"
        },
        {
            "index": 4,
            "timestamp": 1542099926290,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "2e83eeb0e72311e8b84e194b7741be9b",
                    "transactionId": "3cf15280e72311e8b84e194b7741be9b"
                },
                {
                    "amount": 60,
                    "sender": "WEdDF32309E546R444EF54",
                    "recipient": "DFD453DFSDF2SDDRF343EDD",
                    "transactionId": "4018d140e72311e8b84e194b7741be9b"
                }
            ],
            "nonce": 73753,
            "hash": "0000ca377098d81abde63b579ad67c5d29a1049eed162dc792788c964b3653b5",
            "previousBlockHash": "00004da05343bf94841bad700b69140dbca7c08b03f9cf0c05b5815f63495cae"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "2e83eeb0e72311e8b84e194b7741be9b",
            "transactionId": "42a82eb0e72311e8b84e194b7741be9b"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};


console.log('Valid: ', bitcoin.chainIsValid(bc1.chain));