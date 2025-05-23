import * as DataSet from "@nginstack/engine/lib/dataset/DataSet";
import * as Entity from "@nginstack/orm/lib/Entity";

const entity = new Entity(1, new DataSet()); // $ExpectType Entity

entity.key; // $ExpectType number
entity.classKey; // $ExpectType number
entity.autoPersist; // $ExpectType boolean
entity.postPending; // $ExpectType boolean

entity.set("name", "value"); // $ExpectType void
entity.get("*"); // $ExpectType any
entity.assign({}); // $ExpectType void
entity.edit(); // $ExpectType void
entity.cancel(); // $ExpectType void
entity.post(); // $ExpectType void
entity.delete(); // $ExpectType void
entity.bindDataSet(new DataSet()); // $ExpectType void
entity.clone(); // $ExpectType Entity
entity.persist(); // $ExpectType number
entity.toJSONString(); // $ExpectType string
entity.toJSONSchema(); // $ExpectType any

function getVersion(): string {
    return "72.0.1";
}
getVersion(); // $ExpectType string
