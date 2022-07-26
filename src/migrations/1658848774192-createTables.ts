import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1658848774192 implements MigrationInterface {
    name = 'createTables1658848774192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "location_name" character varying NOT NULL, "date" character varying NOT NULL, "description" character varying, "time" character varying NOT NULL, "organization" character varying NOT NULL, "tickets" integer NOT NULL, CONSTRAINT "UQ_b535fbe8ec6d832dde22065ebdb" UNIQUE ("name"), CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
