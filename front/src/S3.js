import S3 from "react-aws-s3";

const config = {
  bucketName: "eatrice",
  region: "ap-northeast-2",
  accessKeyId: "AKIASTJDHDSXLE6N6PMZ",
  secretAccessKey: "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",
};

const ReactS3Client = new S3(config);
export default ReactS3Client;
